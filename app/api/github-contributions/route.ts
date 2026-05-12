import { NextResponse } from 'next/server';

type ContributionDay = {
  date: string;
  count: number;
  level: number;
};

const GITHUB_USERNAME = 'Goutam96801';

function readAttribute(tag: string, name: string) {
  const match = tag.match(new RegExp(`${name}="([^"]*)"`, 'i'));
  return match?.[1] ?? null;
}

function getFallbackLevel(count: number) {
  if (count <= 0) return 0;
  if (count <= 3) return 1;
  if (count <= 6) return 2;
  if (count <= 9) return 3;
  return 4;
}

function parseTooltipCounts(markup: string) {
  const counts = new Map<string, number>();
  const tooltipPattern = /<tool-tip\b[^>]*\bfor="([^"]+)"[^>]*>([\s\S]*?)<\/tool-tip>/gi;
  let match: RegExpExecArray | null;

  while ((match = tooltipPattern.exec(markup)) !== null) {
    const [, dayId, rawText] = match;
    const text = rawText.replace(/<[^>]+>/g, '').trim();
    const countMatch = text.match(/^(\d+)\s+contributions?/i);
    counts.set(dayId, countMatch ? Number(countMatch[1]) : 0);
  }

  return counts;
}

function parseContributionDays(markup: string): ContributionDay[] {
  const tooltipCounts = parseTooltipCounts(markup);
  const tags = markup.match(/<[^>]+data-date="[^"]+"[^>]*>/g) ?? [];

  return tags
    .map((tag) => {
      const id = readAttribute(tag, 'id');
      const date = readAttribute(tag, 'data-date');
      const count = Number(readAttribute(tag, 'data-count') ?? (id ? tooltipCounts.get(id) : 0) ?? 0);
      const level = Number(readAttribute(tag, 'data-level') ?? getFallbackLevel(count));

      if (!date || Number.isNaN(count)) return null;

      return {
        date,
        count,
        level: Number.isNaN(level) ? getFallbackLevel(count) : level,
      };
    })
    .filter((day): day is ContributionDay => day !== null)
    .sort((a, b) => a.date.localeCompare(b.date));
}

export async function GET() {
  try {
    const response = await fetch(
      `https://github.com/users/${GITHUB_USERNAME}/contributions`,
      {
        headers: {
          accept: 'text/html',
          'user-agent': 'portfolio-contribution-graph',
        },
        next: { revalidate: 60 * 60 },
      },
    );

    if (!response.ok) {
      return NextResponse.json(
        { days: [] },
        {
          status: response.status,
          headers: { 'cache-control': 'public, max-age=300' },
        },
      );
    }

    const markup = await response.text();
    const days = parseContributionDays(markup);

    return NextResponse.json(
      { days },
      {
        headers: {
          'cache-control': 'public, max-age=300, s-maxage=3600',
        },
      },
    );
  } catch {
    return NextResponse.json(
      { days: [] },
      {
        status: 502,
        headers: { 'cache-control': 'public, max-age=300' },
      },
    );
  }
}

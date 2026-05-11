
import { Metadata } from 'next';
import ProjectsClient from './project-client-page';

export const metadata: Metadata = {
  title: "My Work",
  description: "My all projects in website and app development",
};


export default function Projects() {

  return (
    <ProjectsClient />
  );
}

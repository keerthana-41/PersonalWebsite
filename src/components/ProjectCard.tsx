import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Project } from '../types/portfolio';

interface ProjectCardProps {
  project: Project;
  variants: any;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, variants }) => {
  return (
    <motion.div
      variants={variants}
      whileHover={{ scale: 1.05, y: -10 }}
    >
      <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        <CardHeader>
          <CardTitle className="text-xl text-indigo-700">{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <img 
            src={project.image} 
            alt={project.title} 
            className="rounded-lg w-full h-48 object-cover mb-4" 
          />
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <Badge key={i} variant="secondary">{tech}</Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex gap-4">
          {/* <Button
            variant="outline"
            className="flex-1"
            onClick={() => window.open(project.githubUrl, '_blank')}
          >
            Source Code
          </Button> */}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
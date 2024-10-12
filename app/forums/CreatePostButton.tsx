import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface CreatePostButtonProps {
  onClick: () => void;
}

export default function CreatePostButton({ onClick }: CreatePostButtonProps) {
  return (
    <Button 
      className="fixed bottom-4 right-4 rounded-full w-14 h-14"
      onClick={onClick}
    >
      <Plus size={24} />
    </Button>
  );
}
// app/dashboard/components/AgeUpdateForm.tsx
'use client';
import { useState } from "react";

export default function AgeUpdateForm() {
  const [age, setAge] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const updateAge = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await fetch('/api/update-age', {
        method: 'POST',
        body: JSON.stringify({ age: parseInt(age) }),
      });
      
      // Reload the page to show dashboard
      window.location.reload();
    } catch (error) {
      console.error('Error updating age:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={updateAge} className="space-y-4">
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Enter your age"
        className="p-2 border rounded"
        required
      />
      <button 
        type="submit"
        disabled={isLoading}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        {isLoading ? 'Updating...' : 'Submit'}
      </button>
    </form>
  );
}
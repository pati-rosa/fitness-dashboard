import { useEffect, useState } from 'react';
import data from '../../api/data.json';

interface Goals {
    id: number
    text: string
    completed: boolean
}
const DailyGoalsChecklist: React.FC = () => {
  const [goals, setGoals] = useState<Array<Goals> | []>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await new Promise<Array<Goals>>((resolve) =>
          setTimeout(() => resolve(data), 1000)
        );
        setGoals(response);
      } catch (error) {
        console.error('Failed to fetch goals:', error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const toggleGoal = (id: number) => {
    setGoals((prevGoals) =>
      prevGoals.map((goal) =>
        goal.id === id ? { ...goal, completed: !goal.completed } : goal
      )
    );
  };

  return (
    <div>
      <h2>Goals</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="goals-list">
          {goals.map((goal) => (
            <li key={goal.id} onClick={() => toggleGoal(goal.id)} className="goal-item">
              <input type="checkbox" checked={goal.completed} readOnly />
              {goal.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DailyGoalsChecklist;
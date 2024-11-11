import { motion } from 'framer-motion';

const QuickActionsWithAnimations: React.FC = () => {
  const handleStartWorkout = () => {
    alert('Workout Started!');
  };

  const handleViewProgress = () => {
    alert('Viewing Progress!');
  };

  return (
    <div>
       <h2>Quick Actions</h2>
      <motion.button
        onClick={handleStartWorkout}
        className="button"
        whileHover={{
          scale: 1.1,
          backgroundColor: '#ff6347', 
          transition: { duration: 0.3 },
        }}
        whileTap={{
          scale: 0.95,
          backgroundColor: '#ff4500', 
        }}
        initial={{ scale: 1 }}
        animate={{ scale: 1 }}
        exit={{ opacity: 0 }}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: '#4caf50',
          color: 'white',
          cursor: 'pointer',
          marginRight: '10px',
        }}
      >
        Start Workout
      </motion.button>

      <motion.button
        onClick={handleViewProgress}
        className="button"
        whileHover={{
          scale: 1.1,
          backgroundColor: '#ff6347',
          transition: { duration: 0.3 },
        }}
        whileTap={{
          scale: 0.95,
          backgroundColor: '#ff4500',
        }}
        initial={{ scale: 1 }}
        animate={{ scale: 1 }}
        exit={{ opacity: 0 }}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: '#4caf50',
          color: 'white',
          cursor: 'pointer',
        }}
      >
        View Progress
      </motion.button>
    </div>
  );
};

export default QuickActionsWithAnimations;

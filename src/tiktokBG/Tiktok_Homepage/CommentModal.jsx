// src/components/CommentModal.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaReply, FaShare } from 'react-icons/fa';

const CommentModal = ({ onClose, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e.target.comment.value);
  };

  return (
    <motion.div 
      className="comment-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <form onSubmit={handleSubmit}>
          <textarea name="comment" placeholder="Write your comment..." required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="comment-options">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaHeart />
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaReply />
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaShare />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CommentModal;

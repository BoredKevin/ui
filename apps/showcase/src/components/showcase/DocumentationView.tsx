import React from 'react';
import { Navigate } from 'react-router-dom';

/**
 * Legacy DocumentationView - Redirects to the multi-page /docs routing structure
 */
export const DocumentationView: React.FC = () => {
  return <Navigate to="/docs" replace />;
};

export default DocumentationView;

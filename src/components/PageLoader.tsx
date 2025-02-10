import React from 'react';
import { Spinner } from '@nextui-org/react';

const PageLoader = () => {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center">
        <Spinner size="lg" color="primary" />
        <p className="mt-4 text-primary font-medium">Cargando...</p>
      </div>
    </div>
  );
};

export default PageLoader;
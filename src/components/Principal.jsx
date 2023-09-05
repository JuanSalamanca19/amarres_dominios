import React from 'react';

const principal = () => {
    return (
        <div className="relative isolate px-6 pt-14 lg:px-8 " id="banner">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white-900 sm:text-6xl">
              Amarres Y Dominios
            </h1>
            <p className="mt-6 text-lg leading-8 text-white-600">
              Clinica Del Amor
            </p>
            <p className="text-sm leading-8 text-white-600">
              Soluciones Únicas Y Personalizadas
            </p>
          </div>
        </div>
        
      </div>
    );
};

export default principal;
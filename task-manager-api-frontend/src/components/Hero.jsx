import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 bg-white text-center">
      <div className="mb-6">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-sm text-gray-600">
          <span className="flex gap-1">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
          </span>
          Lista de tareas en blanco y negro con acentos sutiles
        </span>
      </div>

      <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 max-w-4xl leading-tight">
        Organiza tus tareas con una experiencia clara, rápida y enfocada.
      </h1>

      <p className="mt-6 text-gray-500 max-w-xl text-base md:text-lg">
        Simplificá tu flujo de trabajo con una interfaz clara, rápida y diseñada para mantenerte enfocado en lo que realmente importa.
      </p>

      <div className="mt-8 flex gap-4">
        <button className="px-6 py-3 rounded-lg bg-black text-white font-medium hover:opacity-90 transition">
          Iniciar sesión
        </button>
        <button className="px-6 py-3 rounded-lg bg-gray-100 text-gray-800 font-medium hover:bg-gray-200 transition">
          Explorar vista principal
        </button>
      </div>

      <div className="mt-10 flex gap-6 text-sm text-gray-500">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          Creación rápida
        </span>
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          Edición simple
        </span>
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
          Gestión por prioridad
        </span>
      </div>
    </section>
  );
};

export default Hero;

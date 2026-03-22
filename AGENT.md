# AGENT.md — Pirate UI

> Archivo de memoria del proyecto mantenido automáticamente por Squad AI.
> Última actualización: 2026-03-22

## Descripción del proyecto

Pirate UI es una aplicación de chat moderna construida con Next.js 14 y TypeScript, que ofrece conversaciones en tiempo real, carga de archivos y visualización de datos. Utiliza Redux Toolkit para gestión de estado, componentes Radix UI estilizados con Tailwind CSS, y sigue una arquitectura en capas con separación clara entre componentes, páginas, utilidades y estado.

## Stack técnico

Next.js 14.2.5, React 18, TypeScript 5, Redux Toolkit 2.2.7, Radix UI (dropdown, popover, tabs, toast, tooltip, switch, separator, radio-group, label), Tailwind CSS 3.4.1, Recharts 2.12.7 (gráficos), Axios 1.7.4, React Hook Form 7.52.1, Zod 3.23.8 (validación), next-themes 0.3.0, Lucide React 0.408.0

## Estructura principal

- `src/app`: Rutas y páginas (App Router): chat, demo-chat, file, home, new-chat, layout global
- `src/components`: Componentes React reutilizables: UI (Radix), global (mode-toggle), sidebar, infobar
- `src/store`: Redux: store.ts, reducers y actions para menú
- `src/interfaces`: Definiciones de tipos TypeScript (ChatInterface)
- `src/lib`: Utilidades: constantes, funciones helper, utils
- `src/icons`: Componentes SVG personalizados
- `src/providers`: Proveedores contextuales (tema)

## Convenciones

Estructura modular por feature. Componentes en PascalCase, archivos en kebab-case. Rutas organizadas en directorios de app. Estado centralizado en Redux. Componentes UI sin lógica (presentacionales) separados de lógica. TypeScript strict mode habilitado. Tailwind para estilos, Radix UI como base de componentes accesibles. Path alias @/* apunta a src/.

## Último trabajo completado

PIRA-2: [Fix] Archivo no encontrado - Resolución de problema de archivo faltante en el codebase

## Reglas para los agentes

- Lee este archivo al inicio de cada tarea para entender el contexto del proyecto
- Respeta las convenciones de código existentes
- Ejecuta los tests/lint disponibles antes de terminar

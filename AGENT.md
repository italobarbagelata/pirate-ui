# AGENT.md — Pirate UI

> Archivo de memoria del proyecto mantenido automáticamente por Squad AI.
> Última actualización: 2026-03-23

## Descripción del proyecto

Pirate UI es una aplicación de chat moderna construida con Next.js 14 y TypeScript que proporciona interfaces de conversación en tiempo real, gestión de archivos y visualización de datos. Utiliza Redux Toolkit para estado centralizado, componentes Radix UI con Tailwind CSS, y sigue una arquitectura modular y escalable.

## Stack técnico

Next.js 14.2.5, React 18, TypeScript 5, Redux Toolkit 2.2.7, Radix UI (dropdown, popover, tabs, toast, tooltip, switch, separator, radio-group, label), Tailwind CSS 3.4.1, Recharts 2.12.7, Axios 1.7.4, React Hook Form 7.52.1, Zod 3.23.8, next-themes 0.3.0, Lucide React 0.408.0, dayjs 1.11.12

## Estructura principal

- `src/app`: Rutas y páginas (App Router): chat, demo-chat, file, home, new-chat con layout global
- `src/components`: Componentes reutilizables: UI (Radix), global (mode-toggle), sidebar, infobar
- `src/store`: Redux: store.ts, reducers y actions para gestión de menú centralizada
- `src/utils`: Funciones utilitarias: DateUtils.ts para operaciones de fechas
- `src/lib`: Constantes y helpers: constant.ts, utils.ts
- `src/interfaces`: Definiciones TypeScript: ChatInterface
- `src/icons`: Componentes SVG personalizados
- `src/providers`: Proveedores contextuales: theme-provider

## Convenciones

Estructura modular por feature. Componentes en PascalCase, archivos en kebab-case. Rutas organizadas en directorios de app. Estado centralizado en Redux con actions y reducers separados. Componentes UI presentacionales sin lógica de negocio. TypeScript strict mode habilitado. Tailwind CSS para estilos, Radix UI como base de componentes accesibles. Path alias @/* apunta a src/. Componentes de demo-chat organizados en subdirectorio /component. Formularios con React Hook Form y validación con Zod.

## Último trabajo completado

PIRA-1: [Fix] Import no encontrado: @/utils/DateUtils - Resolución de problema de importación faltante en el proyecto. El archivo DateUtils.ts existe en src/utils/ y está correctamente configurado en tsconfig.json con paths alias.

## Reglas para los agentes

- Lee este archivo al inicio de cada tarea para entender el contexto del proyecto
- Respeta las convenciones de código existentes
- Ejecuta los tests/lint disponibles antes de terminar

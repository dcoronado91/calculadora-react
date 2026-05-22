# CalcPro

CalcPro es una calculadora web moderna construida con React, TypeScript y Vite. El proyecto separa la interfaz en componentes pequeños, concentra la lógica de negocio en un hook reutilizable y cuenta con pruebas automatizadas y documentación visual con Storybook.

## Demo

**[Ver aplicación en vivo](https://calculadora-react-teal-mu.vercel.app/)**

## Funcionalidades

- Operaciones aritméticas: suma, resta, multiplicación, división y módulo.
- Entrada de números decimales.
- Cambio de signo con `+/-`.
- Límite de 9 dígitos visibles en el display.
- Operaciones encadenadas con resultado intermedio.
- Limpieza del estado con `C`.
- Manejo de errores para resultados negativos, división entre cero, valores infinitos o resultados mayores a `999999999`.
- Formateo de resultados decimales para ajustarlos al límite del display.

## Tecnologías

| Tecnología | Uso |
| --- | --- |
| React 19 | Construcción de la interfaz |
| TypeScript 6 | Tipado estático |
| Vite 8 | Servidor de desarrollo y build |
| Vitest 4 | Ejecución de pruebas |
| Testing Library | Pruebas de comportamiento de usuario |
| Storybook 10 | Documentación y revisión visual de componentes |
| ESLint 9 + neostandard | Reglas de estilo y linting |
| Bun | Gestor de paquetes recomendado |

## Instalación

Con Bun:

```bash
bun install
bun run dev
```

Con npm:

```bash
npm install
npm run dev
```

La aplicación queda disponible en la URL local que muestre Vite, normalmente `http://localhost:5173`.

## Scripts

| Comando | Descripción |
| --- | --- |
| `bun run dev` | Inicia el servidor de desarrollo |
| `bun run build` | Compila TypeScript y genera el build de producción |
| `bun run preview` | Sirve localmente el build generado |
| `bun run test` | Ejecuta las pruebas con Vitest |
| `bun run lint` | Revisa el código con ESLint |
| `bun run storybook` | Inicia Storybook en `http://localhost:6006` |
| `bun run build-storybook` | Genera el build estático de Storybook |

Si usas npm, reemplaza `bun run` por `npm run`.

## Estructura

```text
src/
  components/
    Button.tsx        # Botón individual de la calculadora
    ButtonGrid.tsx    # Teclado de botones
    Calculator.tsx    # Composición principal
    Display.tsx       # Pantalla de resultados
  constants/
    buttons.ts        # Layout y variantes del teclado
  hooks/
    useCalculator.ts  # Estado, operaciones y reglas de la calculadora
  stories/
    *.stories.tsx     # Casos visuales para Storybook
  test/
    setup.ts          # Configuración de pruebas
  types/
    calculator.ts     # Tipos compartidos
```

## Pruebas

El proyecto incluye pruebas de comportamiento sobre la calculadora completa. Actualmente cubren:

- Concatenación de dígitos.
- Límite de 9 dígitos.
- Reinicio con `C`.
- Operaciones encadenadas.
- Error por resultado negativo.
- Error por resultado mayor a `999999999`.
- División con resultado decimal largo.
- Operación módulo.
- Cambio de signo con `+/-`.

Ejecuta la suite con:

```bash
bun run test
```

## Storybook

Storybook documenta los estados principales de los componentes:

- `Calculator/Display`: estado inicial, número, longitud máxima, decimal y error.
- `Calculator/Button`: número, operador, especial, igual y cero.
- `Calculator/Calculator`: calculadora completa.

Para abrirlo en desarrollo:

```bash
bun run storybook
```

## Calidad de código

El proyecto usa ESLint con `neostandard` para mantener un estilo consistente. Antes de entregar cambios, se recomienda ejecutar:

```bash
bun run lint
bun run test
bun run build
```

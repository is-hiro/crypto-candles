# Crypto-candles

[![React](https://img.shields.io/badge/React-18%2B-61dafb?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0%2B-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Bundler](https://img.shields.io/badge/Bundler-tsup-ffca28)](https://github.com/egoist/tsup)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](#license)

> @is-hiro/crypto-candles is a React + TypeScript library for rendering candlestick charts on Canvas 2D.

The goal is to create a lightweight and manageable chart component.

Currently, the library is an early prototype: the rendering core is already in place, and features will be expanded (new charts, ema, sma, etc.)

## Features

- Full customization
- The component supports horizontal scrolling by dragging out of the box: Hold your mouse or finger on the canvas, drag horizontally, and the chart will scroll within the available candlesticks.

## Demo

Test the library's capabilities

[SHOW DEMO](https://is-hiro-candles.netlify.app)

## Usage

### 1. Install

npm

```bash
npm install @is-hiro/crypto-candles
```

yarn

```bash
yarn add @is-hiro/crypto-candles
```

### 2. Example

```bash
import { type Candle, Candles } from '@is-hiro/crypto-candles';

const candles: Candle[] = [...];

const options = {
  background: 'transparent',
  gap: 8,
  candle: {
    width: 8,
    bullColor: '#a8ed6d',
    bearColor: '#f17067',
  },
};

export function App() {
  return (
    <div>
      <Candles
        candles={candles}
        width={800}
        height={400}
      />
    </div>
  );
}
```

### Props

| Prop      | Type            | Required | Description                                                                                            |
| --------- | --------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `candles` | `Candle[]`      | ✅       | An array of candles from which the chart is constructed                                             |
| `width`   | `number`        | ❌       | Canvas width in pixels                                                                              |
| `height`  | `number`        | ❌       | Canvas height in pixels                                                                             |
| `options` | `object`        | ❌       | Settings for the appearance of the chart and candles (colors, candle width, margins and background) |
| `style`   | `CSSProperties` | ❌       | Additional styles for the `<canvas>`                                                                |

### `options` object

| Prop         | Type     | Required | Description                                              |
| ------------ | -------- | -------- | -------------------------------------------------------- |
| `gap`        | `number` | ❌       | Horizontal space between candles in pixels.              |
| `background` | `string` | ❌       | Canvas background color.                                 |
| `candle`     | `object` | ❌       | Nested options for candle appearance (colors and width). |

### `options.candle` object

| Prop        | Type     | Required | Description              |
| ----------- | -------- | -------- | ------------------------ |
| `bullColor` | `string` | ❌       | Color of bullish candles |
| `bearColor` | `string` | ❌       | Color of bearish candles |
| `width`     | `number` | ❌       | Candle width in pixels   |

### Data structure

```bash
type Candle = {
  time: number;
  open: number;
  close: number;
  high: number;
  low: number;
  volume: number;
};
```

## Author

- [@is-hiro](https://www.github.com/is-hiro)

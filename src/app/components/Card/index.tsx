// components/card.ts
import type { VariantProps } from 'class-variance-authority';
import { cva, cx } from 'class-variance-authority';

/**
 * Box
 */
export const box = cva(['box', 'box-border'], {
  variants: {
    margin: { 0: 'm-0', 2: 'm-2', 4: 'm-4', 8: 'm-8' },
    padding: { 0: 'p-0', 2: 'p-2', 4: 'p-4', 8: 'p-8' },
  },
  defaultVariants: {
    margin: 0,
    padding: 0,
  },
});
export type BoxProps = VariantProps<typeof box>;

/**
 * Card
 */
const cardBase = cva(['card', 'border-solid', 'border-slate-300', 'rounded'], {
  variants: {
    shadow: {
      md: 'drop-shadow-md',
      lg: 'drop-shadow-lg',
      xl: 'drop-shadow-xl',
    },
  },
});
type CardBaseProps = VariantProps<typeof cardBase>;

export interface CardProps
  extends BoxProps,
    CardBaseProps,
    React.HTMLAttributes<HTMLDivElement> {}
export const card = ({ margin, padding, shadow }: CardProps = {}) =>
  cx(box({ margin, padding }), cardBase({ shadow }));

const Card = ({ ...props }: CardProps) => {
  return (
    <div
      className={card({
        ...props,
      })}
    >
      {props.children}
    </div>
  );
};

export default Card;

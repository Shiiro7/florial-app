import { cn } from '@/lib/utils';
import { Container } from './Container';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  container?: boolean;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  background?: 'white' | 'light' | 'dark' | 'primary' | 'nature';
}

const backgrounds = {
  white: 'bg-white',
  light: 'bg-earth-50',
  dark: 'bg-earth-900 text-white',
  primary: 'bg-primary-600 text-white',
  nature: 'bg-nature-pattern bg-earth-50',
};

export function Section({
  className,
  container = true,
  containerSize = 'xl',
  background = 'white',
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn('py-16 md:py-24', backgrounds[background], className)}
      {...props}
    >
      {container ? (
        <Container size={containerSize}>{children}</Container>
      ) : (
        children
      )}
    </section>
  );
}

export function SectionHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('text-center mb-12 md:mb-16', className)} {...props}>
      {children}
    </div>
  );
}

export function SectionTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        'text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4',
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function SectionSubtitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn('text-lg md:text-xl text-earth-600 max-w-2xl mx-auto', className)}
      {...props}
    >
      {children}
    </p>
  );
}

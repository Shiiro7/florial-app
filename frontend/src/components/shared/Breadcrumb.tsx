import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { Container } from '@/components/ui/Container';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="bg-earth-50 py-4">
      <Container>
        <nav aria-label="Fil d'Ariane">
          <ol className="flex items-center gap-2 text-sm flex-wrap">
            <li>
              <Link
                href="/"
                className="flex items-center gap-1 text-earth-500 hover:text-primary-600 transition"
              >
                <Home size={16} />
                <span className="sr-only">Accueil</span>
              </Link>
            </li>
            {items.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <ChevronRight size={16} className="text-earth-400" />
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-earth-500 hover:text-primary-600 transition"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-earth-700 font-medium">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </Container>
    </div>
  );
}

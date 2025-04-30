import { Button } from "@/components/ui/button";

import { Home } from "lucide-react";

import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow pt-20">
        <div className="min-h-[80vh] flex flex-col items-center justify-center pt-20 px-4">
          <div className="text-center max-w-lg mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold gradient-text mb-6">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Page Not Found
            </h2>
            <p className="text-portfolio-text-secondary mb-8">
              The page you are looking for doesn&apos;t exist or has been moved.
            </p>
            <Link href="/">
              <Button className="btn-primary">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;

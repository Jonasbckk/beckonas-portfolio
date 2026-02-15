export function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-2xl font-bold font-display tracking-tighter text-white">
          BECKONAS
        </div>
        <div className="text-sm text-muted-foreground text-center md:text-right">
          &copy; {new Date().getFullYear()} Beckonas. Alle Rechte vorbehalten. <br className="md:hidden"/> Mit Leidenschaft gestaltet.
        </div>
      </div>
    </footer>
  );
}
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div className="hero min-h-screen bg-slate-900 text-white">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Welcome!</h1>
          <p className="py-6 mb-5">Choose a character to start the experience</p>
          <div className="grid gap-2">
            <Link to="/character/deadpool" className="btn btn-outline text-slate-100">Deadpool</Link>
            <Link to="/character/hulk" className="btn btn-outline btn-primary">Hulk</Link>
            <Link to="/character/ironman" className="btn btn-outline btn-secondary">Iron Man</Link>
            <Link to="/character/spiderman" className="btn btn-outline btn-accent">Spider Man</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

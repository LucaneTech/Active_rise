const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold mb-4 text-gold">404</h1>
      <p className="text-xl mb-8">Page Non Trouvée</p>
      <a href="/" className="bg-gold p-3 text-white rounded  transition duration-300 hover:bg-gold/50">
        Retour à l'Accueil
      </a>
    </div>
  );
};

export default ErrorPage;
import Twin from '@/components/twin';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
            Currículo Inteligente de Madson Aguiar Rodrigues
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Fale com meu Agente de IA sobre meu currículo e experiência profissional.
          </p>

          <div className="h-[600px]">
            <Twin />
          </div>

          {/* Social Links and Projects */}
          <div className="mt-12 space-y-8">
            {/* Social Links */}
            <section className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Conecte-se comigo</h2>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/madson-aguiar-rodrigues-5650472b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.youtube.com/@MadsonAguiarRodrigues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
                >
                  📹 Canal YouTube
                </a>
                <a
                  href="https://github.com/madsonar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-medium"
                >
                  💻 GitHub
                </a>
              </div>
            </section>

            {/* Featured Projects */}
            <section className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Materiais de Minha Autoria</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-slate-700 pl-4">
                  <h3 className="font-bold text-gray-800 mb-2">
                    Arquitetura de Sistema de Transações Bancárias Resiliente
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Vídeo explicando a arquitetura de um desafio técnico que desenvolvi para o processo do PicPay, onde implementei um sistema de transações bancárias resiliente. Nesse projeto, aplico boas práticas de aplicações distribuídas, Clean Architecture, DDD e Clean Code.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://youtu.be/wpQyMU85dW4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm px-4 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors"
                    >
                      📹 YouTube (Hyperf)
                    </a>
                    <a
                      href="https://youtu.be/aV1QoL2_ltQ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm px-4 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors"
                    >
                      📹 YouTube (Laravel)
                    </a>
                    <a
                      href="https://github.com/madsonar/setup-php-projects-multi-frameworks-payment-api"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition-colors"
                    >
                      💻 GitHub
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <footer className="mt-8 text-center text-sm text-gray-500">
            <p>By Madson Aguiar Rodrigues</p>
          </footer>
        </div>
      </div>
    </main>
  );
}
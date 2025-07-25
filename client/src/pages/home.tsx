

export default function Home() {
  const portfolioCompanies = [
    {
      name: "ALICE (PRETAX HERO INC)",
      description: "COMMUTER BENEFITS COMPLIANCE",
      url: "https://www.thisisalice.com/"
    },
    {
      name: "ARCHER",
      description: "ANTI-FRAUD PLATFORM FOR AFRICA",
      url: "https://www.archerprotect.com/"
    },
    {
      name: "CHECKER FINANCE",
      description: "GLOBAL LIQUIDITY NETWORK FOR STABLECOINS",
      url: "https://www.checker.finance/"
    },
    {
      name: "JOYFUL HEALTH",
      description: "FINANCIAL OPERATIONS FOR HEALTHCARE PROVIDERS",
      url: "https://www.joyfulhealth.io/"
    },
    {
      name: "LITTIO (YCW23)",
      description: "DIGITAL BANK FOR LATIN AMERICA",
      url: "https://littio.co/"
    },
    {
      name: "MERCOA (YCW23)",
      description: "AI AGENT FOR VIRTUAL CARDS",
      url: "https://mercoa.ai/"
    },
    {
      name: "RIVY (YCS21)",
      description: "FINANCING THE FUTURE OF ENERGY",
      url: "https://rivy.co/"
    },
    {
      name: "SALMON",
      description: "AI ENGINE FOR ENTERPRISE GROWTH OPERATIONS",
      url: "https://salmonrun.ai/"
    },
    {
      name: "SIEVE (YCX25)",
      description: "DATA CLEANING FOR INVESTMENT FIRMS",
      url: "https://www.usesieve.com/"
    },
    {
      name: "SPHEROS",
      description: "SECURE DATA PLATFORM",
      url: "https://www.spheros.io/"
    },
    {
      name: "THE LLM DATA COMPANY (YCX25)",
      description: "FRONTIER EVALS FOR MODEL MEASUREMENT",
      url: "https://www.thellmdatacompany.com/"
    },
    {
      name: "TINY (YCF24)",
      description: "MODERN AGENTIC ERP",
      url: "https://andtiny.com/"
    },
    {
      name: "ZETA",
      description: "FINANCES FOR COUPLES AND FAMILIES",
      url: "https://www.askzeta.com/"
    }
  ];

  return (
    <div className="terminal-bg terminal-amber font-terminal min-h-screen p-4">
      <div className="max-w-6xl mx-auto terminal-screen-curve p-8 m-4">
        {/* Header Terminal */}
        <div className="terminal-border terminal-container p-6 mb-8 fade-in">
          <div className="text-center">
            <div className="text-xs mb-2 opacity-40 font-mono">UPEND CAPITAL INVESTMENT SYSTEM v1.0</div>
            <div className="text-xs mb-4 opacity-40">Copyright (C) 1985-2025 • All Rights Reserved</div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4 terminal-glow tracking-wider">
              UPEND CAPITAL
            </h1>
            
            <div className="flex justify-center items-center gap-2 text-sm">
              <span>STATUS:</span>
              <span className="terminal-amber-light">ONLINE</span>
              <span className="w-2 h-2 bg-current rounded-full terminal-cursor"></span>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Fund Overview Section */}
          <section className="terminal-border terminal-container p-6 slide-up">
            <h2 className="text-xl mb-4 terminal-glow">1.0 FUND_OVERVIEW</h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="mb-4">
                  <div className="terminal-amber-light mb-2">INVESTMENT RANGE:</div>
                  <div className="opacity-80">$5,000 - $50,000</div>
                </div>
                <div className="mb-4">
                  <div className="terminal-amber-light mb-2">STAGE FOCUS:</div>
                  <div className="opacity-80">Pre-seed to Series A</div>
                </div>
                <div className="mb-4">
                  <div className="terminal-amber-light mb-2">SECTORS:</div>
                  <div className="opacity-80">Agnostic - All Technology Verticals</div>
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <div className="terminal-amber-light mb-2">FUND PRINCIPALS:</div>
                  <div className="opacity-80 mb-2">• 
                    <a 
                      href="https://www.linkedin.com/in/jintal/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="terminal-amber terminal-link px-1"
                    >
                      Justin
                    </a>
                  </div>
                  <div className="opacity-80">• 
                    <a 
                      href="https://www.linkedin.com/in/alex-z-chen/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="terminal-amber terminal-link px-1"
                    >
                      Alex
                    </a>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="terminal-amber-light mb-2">TEAM BACKGROUND:</div>
                  <div className="opacity-80 text-xs">
                    Justin is the founder and ex-CEO of Forage (YCS21). Alex was an investor at Citi Ventures and Kapor Capital. We invest in markets and people.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Portfolio Companies Section */}
          <section className="terminal-border terminal-container p-6 slide-up">
            <h2 className="text-xl mb-4 terminal-glow">2.0 PORTFOLIO_COMPANIES</h2>
            <div className="text-sm mb-4 opacity-60">Select investment partners and technology ventures</div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {portfolioCompanies.map((company, index) => (
                <div key={index} className="portfolio-card border border-current border-opacity-30 p-4">
                  <div className="mb-2">
                    <a 
                      href={company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="portfolio-name terminal-amber-light terminal-link px-2 py-1 inline-block"
                    >
                      {company.name} →
                    </a>
                  </div>
                  <div className="portfolio-description text-xs">{company.description}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-xs opacity-60">
              <div className="mb-2">PORTFOLIO_STATUS: ACTIVE_MONITORING</div>
              <div>COMPANIES_TRACKED: 13</div>
            </div>
          </section>

          {/* Investment Focus Section */}
          <section className="terminal-border terminal-container p-6 slide-up">
            <h2 className="text-xl mb-4 terminal-glow">3.0 INVESTMENT_PARAMETERS</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="mb-6">
                  <div className="terminal-amber-light mb-3">TARGET MARKETS</div>
                  <div className="text-sm space-y-2 opacity-80">
                    <div>• Large fragmented industries</div>
                    <div>• Low customer satisfaction scores</div>
                    <div>• High inefficiency markets</div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="mb-6">
                  <div className="terminal-amber-light mb-3">INVESTMENT APPROACH</div>
                  <div className="text-sm space-y-2 opacity-80">
                    <div>• High-conviction, concentrated bets</div>
                    <div>• Hands-on support and mentorship</div>
                    <div>• Network access and introductions</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="terminal-border terminal-container p-6 slide-up">
            <h2 className="text-xl mb-4 terminal-glow">4.0 CONTACT_PROTOCOL</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="mb-4">
                  <div className="terminal-amber-light mb-2">PRIMARY CONTACT:</div>
                  <a 
                    href="mailto:justin@upendcapital.com"
                    className="terminal-amber terminal-link px-2 py-1 inline-block mb-1"
                  >
                    justin@upendcapital.com
                  </a>
                  <br />
                  <a 
                    href="mailto:alex@upendcapital.com"
                    className="terminal-amber terminal-link px-2 py-1 inline-block"
                  >
                    alex@upendcapital.com
                  </a>
                </div>
                
                <div className="mb-4">
                  <div className="terminal-amber-light mb-2">LOCATION:</div>
                  <div className="opacity-80">New York, NY</div>
                </div>
                
                <div className="mb-4">
                  <div className="terminal-amber-light mb-2">RESPONSE TIME:</div>
                  <div className="opacity-80">24-48 hours</div>
                </div>
              </div>
            </div>
          </section>



          {/* System Status Footer */}
          <section className="terminal-border terminal-container p-4 fade-in">
            <div className="text-xs space-y-2">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="space-y-1">
                  <div>SYSTEM STATUS: <span className="terminal-amber-light">OPERATIONAL</span></div>
                  <div>NETWORK CONNECTION: <span className="terminal-amber-light">ESTABLISHED</span></div>
                  <div>MEMORY: <span className="opacity-80">640K AVAILABLE</span></div>
                  <div>DISK SPACE: <span className="opacity-80">42MB FREE</span></div>
                </div>
                <div className="mt-2 md:mt-0 opacity-60 text-right">
                  <div>UPEND CAPITAL LLC</div>
                  <div>BUILD: 1985.07.24.001</div>
                  <div>TERMINAL EMULATION: AMBER CRT</div>
                </div>
              </div>
              <div className="border-t border-amber-800 pt-2 mt-4 text-center opacity-40">
                Press [F1] for Help • [ESC] to Exit • [CTRL+C] to Interrupt
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

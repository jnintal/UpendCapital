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
      description: "EMBEDDED ACCOUNTS PAYABLE PLATFORM",
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
      name: "ZETA",
      description: "FINANCES FOR COUPLES AND FAMILIES",
      url: "https://www.askzeta.com/"
    }
  ];

  return (
    <div className="terminal-bg terminal-green font-terminal min-h-screen p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Terminal */}
        <div className="terminal-border terminal-container p-6 mb-8">
          <div className="text-center">
            <div className="text-sm mb-4 opacity-60">Investment Terminal v1.0</div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4 terminal-glow tracking-wider">
              UPEND CAPITAL
            </h1>
            
            <div className="flex justify-center items-center gap-2 text-sm">
              <span>STATUS:</span>
              <span className="terminal-lime">ONLINE</span>
              <span className="w-2 h-2 bg-current rounded-full terminal-cursor"></span>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Fund Overview Section */}
          <section className="terminal-border terminal-container p-6">
            <h2 className="text-xl mb-4 terminal-glow">1.0 FUND OVERVIEW</h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="mb-4">
                  <div className="terminal-lime mb-2">INVESTMENT RANGE:</div>
                  <div className="opacity-80">$5,000 - $50,000</div>
                </div>
                <div className="mb-4">
                  <div className="terminal-lime mb-2">STAGE FOCUS:</div>
                  <div className="opacity-80">Pre-seed to Series A</div>
                </div>
                <div className="mb-4">
                  <div className="terminal-lime mb-2">SECTORS:</div>
                  <div className="opacity-80">Agnostic - All Technology Verticals</div>
                </div>
                <div className="mb-4">
                  <div className="terminal-lime mb-2">LOCATION:</div>
                  <div className="opacity-80">New York, NY</div>
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <div className="terminal-lime mb-2">FUND PRINCIPALS:</div>
                  <div className="opacity-80 mb-2">• 
                    <a 
                      href="https://www.linkedin.com/in/jintal/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="terminal-green terminal-link px-1"
                    >
                      Justin
                    </a>
                  </div>
                  <div className="opacity-80">• 
                    <a 
                      href="https://www.linkedin.com/in/alex-z-chen/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="terminal-green terminal-link px-1"
                    >
                      Alex
                    </a>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="terminal-lime mb-2">TEAM BACKGROUND:</div>
                  <div className="opacity-80 text-xs">
                    Justin is the founder and ex-CEO of Forage (YCS21). Alex was an investor at Citi Ventures and Kapor Capital. We invest in markets and people.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Portfolio Companies Section */}
          <section className="terminal-border terminal-container p-6">
            <h2 className="text-xl mb-4 terminal-glow">2.0 PORTFOLIO COMPANIES</h2>
            <div className="text-sm mb-4 opacity-60">Select investment partners and technology ventures</div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {portfolioCompanies.map((company, index) => (
                <div key={index} className="border border-current border-opacity-30 p-4 hover:border-opacity-100 transition-all">
                  <div className="mb-2">
                    <a 
                      href={company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="terminal-lime terminal-link px-2 py-1 inline-block"
                    >
                      {company.name} →
                    </a>
                  </div>
                  <div className="text-xs opacity-60">{company.description}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-xs opacity-60">
              <div className="mb-2">PORTFOLIO_STATUS: ACTIVE_MONITORING</div>
              <div>COMPANIES_TRACKED: 12</div>
            </div>
          </section>

          {/* Investment Focus Section */}
          <section className="terminal-border terminal-container p-6">
            <h2 className="text-xl mb-4 terminal-glow">3.0 INVESTMENT PARAMETERS</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="mb-6">
                  <div className="terminal-lime mb-3">TARGET MARKETS</div>
                  <div className="text-sm space-y-2 opacity-80">
                    <div>• Large fragmented industries</div>
                    <div>• Low customer satisfaction scores</div>
                    <div>• High inefficiency markets</div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="mb-6">
                  <div className="terminal-lime mb-3">INVESTMENT APPROACH</div>
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
          <section className="terminal-border terminal-container p-6">
            <h2 className="text-xl mb-4 terminal-glow">4.0 CONTACT_PROTOCOL</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="mb-4">
                  <div className="terminal-lime mb-2">PRIMARY_CONTACT:</div>
                  <a 
                    href="mailto:justin@upendcapital.com"
                    className="terminal-green terminal-link px-2 py-1 inline-block"
                  >
                    justin@upendcapital.com
                  </a>
                </div>
                
                <div className="mb-4">
                  <div className="terminal-lime mb-2">HEADQUARTERS:</div>
                  <div className="opacity-80">New York, NY</div>
                  <div className="opacity-60 text-xs">United States</div>
                </div>
                
                <div className="mb-4">
                  <div className="terminal-lime mb-2">RESPONSE_TIME:</div>
                  <div className="opacity-80">24-48 hours</div>
                </div>
              </div>
            </div>
          </section>

          {/* System Status Footer */}
          <section className="terminal-border terminal-container p-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <div>SYSTEM: <span className="terminal-lime">OPERATIONAL</span></div>
                <div>NETWORK: <span className="terminal-lime">ONLINE</span></div>
                <div>LAST_UPDATE: <span className="opacity-60">2025.07.24</span></div>
              </div>
              <div className="opacity-60">
                UPEND_CAPITAL_LLC © 2025 • TERMINAL_v1.0
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Mail, Key, Copy, Check, ShieldAlert, Globe } from 'lucide-react';

const SecureContact = () => {
  const [copied, setCopied] = useState(false);

  // MANTENHA SUA CHAVE REAL AQUI
  const pgpKey = `-----BEGIN PGP PUBLIC KEY BLOCK-----

mQINBGlJq/EBEAC3ml68qdoyBTCjo/Psd5QRUIeJsf+L9z7zBS4z4Vb5HHhgm8J9
2dld+hbIg6MRXdL6FuEnK63J18jwG1/7zvgMRJnppuQCO58PJ1Fg4Bz9ZBJ0pB07
VuG/Hut1wzw31nqfu/c/giU4zcK45yrd9VraeS2REdyK5eC/1N2cmLlzlNc0Wi3T
wf8R+gz/0s8Kgn2/NMyLqCugr8SV/RuHtcT92mUUsrL3SpgNR9/82nOSsdRaUmsZ
7dhPAvH2n5FXNuIdOqX7xtapHHn7YNUdbfoyrgSP2bqjvoHcggWl7mSMrSKSkD2e
O9XoExgyeV0lhE8NaO3WXmCmdAGWs8ImGTH6Txht3BgfOrZqcgknMTKweTULPmvy
tqsMdgQ/dCDtPpGn05Q7t206ln1HK2KXDDU7FQDgVgpvBCEzJAJInRsNpyOGU5yy
74FG+S/DVrARPsGlT7e0GOgbwhW478eJtpa1qNC9xv+t+eNXqAgkJMwGzAG6L82o
hJdzJS2GYI+ydpUgRnhx8enz0LxmcBVMclbJ3UHFYD/Uk5v5bl4UUBMyOuEqNyZG
LOPoCF+lFCwXFzYGhMJaar5ZI93iquTrfxuKCGwSIztqJor1t6VrBb5nKwXTW137
+KfmOI5TJk+yg6XyKgxoIJyisRyssLxvUx73ElSZTBUHXYbZ3idaszoSSwARAQAB
tCMweERlbHRhIFJlc2VhcmNoIDxyb290QDB4ZGVsdGEub3JnPokCVwQTAQgAQRYh
BCnHE45i4znPz2fp+rHWlmChPTfCBQJpSavxAhsDBQkFpJz/BQsJCAcCAiICBhUK
CQgLAgQWAgMBAh4HAheAAAoJELHWlmChPTfC1AoP/2zPtMcmksYffk/BtkTzQado
FHQA6AKJh2oXbtnGQfmBe34oq4+w37YnrMyy7aMMV+996T33wADxwYEwpDmd6GzX
sg0KaRkG3KSV+QvHsrJJCHpEdo7uXsBibCA4px5JLGShEWhExGtEe5fkqqhgjHof
Frq4+fOeiTkeGiMutdpr9GSh67de/TLJIorEn/P55MPbfRXGK7cPlElv/mnZKm55
6I07TMahupUxoepD2ZZ+CGdVMDvljQ57ErjqJf8uzpVytOf/gPT8GUKPPZqYGrer
A7INHzXbSfhT6C0fVXaTMy7lh5lHxxcH3kBU3wuxnn5vqrqem8kslt9727voz0SO
P/HPKBk5ONBGeA/z2kTi2tuBwXLzbMQMnl/uQgpDMUKjH9NHuw3LIkIrOs9a1HkT
M5Xv+fRd0lR+8efkJlMd8aw78JhkKPCADyWDyi0e3xUlPfXleGpWtJMCCwc9fpgF
cml0o2FfXUOu+rLrcBi40FC28bWRUrsh+4N2TV6mqCreRzDJnxPct6jtjyYxQnvh
aPTeKJ2qzFLdwFODMNLNDrdJGDRQsWKnOwI+WSyOayZfCaxCw5CActpGWoMjF9DF
RXwUzzL5DPTKUZ6AkEjLho74hGNm48/dH1mz+N2dyb7PbzrOhEEPdl8cJnYPqQNq
k2MJtspmRGcadyRa3u6GuQINBGlJq/EBEADIGSPI1nox5+dCyyAm0xOUhof79Zz8
7ywN7lDTacCMX9lNZ3yk3U95KLXUwWbmTzl/3fdQWHB85OaA22Jd1Cy28UR/Let2
Q+5lrwU8zSqUIUTEyRNEfC7GFuMrfdrIVkMqtyZkgCaC2gwkeVb1fo3S3mc9tmsH
guNDj8/mXVfpPQyoRjQns3LYTKRWxaoJFDFxUijimwH+MN9QfYgsPsP8/ok8oF1O
x6T2Tk7cgqogm/5BouaJTHAUGTxvv5ihwJdT9txaaRN6vwdCw7klrn+Vh+TUnST1
mltH667WzR/kc7lORR7xGufh8y2SS1v4f2HNypnZvqcVPopEKgTz8BCGOc+zqbee
E2alPscFpnrZKqrxPO5sThkbTBSD2Ki+rBZ+1+9vFhV207JIVvEfSA9IJNhC8M+m
Xb/Osl6gT6kN4r8jFw5tq473vghizCRcG5PWyRrWBmr9FGlJWl6mNF5EkWPPMRQh
QX/rrGLX2HEnDk7ai6bfZp+Fqmpl/9jzD3GIl47BDe1AAwskGb/nE+IB7v6mOgPS
T2rWZctjt7tiLziDCVXxjZLI7nPEFI4zhBXnI7BgVOyIn1IyFmZCsvHU1DxKLOgo
MkEBm0Ou4l2XTKHfH5W0a0hUgYvA1zhdbc7NM4vM4CuurLQeAqxuwmjV89v6HQqG
AFKfV3LUFvZF1QARAQABiQI8BBgBCAAmFiEEKccTjmLjOc/PZ+n6sdaWYKE9N8IF
AmlJq/ECGwwFCQWknP8ACgkQsdaWYKE9N8LnpA//UHTK2mbzkzstqEcngQpRhxAq
F0OqnK0TG1rqyQ+FMjoEUQvsVc1UAsRPNkPCB9QaE5RKGbuzDIHO3jpk1vDz/q4u
cb7JDMNvbK2meO2Rp64qK+YhJokwPoZWc0Yl1FP+Dpcdwjk4I2gFD2ecpdhBnO7+
25pvAn9Q7q7bjsbA9kUDSwgkbz3waa4YcaeJL4hVVWLJd6rmCZ+unn7+Gfp8Z6/I
BwkLhC344A0HpWIY3YFxq2iAobuxvxMK+MjIE4sgQWARgp7BvDpF58/TPlnlBNl0
JcWRRp4eVJQq1NoedQhYn94D8oaQQkKKzxzGUvaOZQ49FZIbFgnvVjc2J5BoXu6M
oJHLawvMasep/RaqzqlLCcYw4TnWXqkHzrDLE7aoLQTPDPQ525GfYmtVrl2VkIaL
wW6pyN5yo2xD8aKrg4TlpM903d7Ldhh/06O4SKvIRhV797iboz/r9aOkyKj/OdjA
tI6nDUng3pzSc+zC1MDXrsSIn21tKiN1JzAl5XnHbw6czqmNvh1japdGs9p3s98E
S1zLCARSkJ3yKROAaLM7XjPEq1OAexNgguwgD24QW2ndxxtTQHwZmBb3pIkAb0QO
uib/WYYqNUzBMMrZQ/BFT8VAn52IkHQjwS4sPa6CLLxpiMtTl33Tix4pMAT1Q3G8
DwgFYb7RTIZ4aib4ga8=
=sc3o
-----END PGP PUBLIC KEY BLOCK-----`;

  const handleCopy = () => {
    navigator.clipboard.writeText(pgpKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-white uppercase tracking-widest flex items-center justify-center gap-3">
          Secure Uplink
        </h2>
        <div className="h-1 w-12 bg-neutral-800 mx-auto mt-4"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-neutral-800">
        
        {/* LADO ESQUERDO: E-MAIL E REGRAS */}
        <div className="bg-neutral-900/30 p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-neutral-800">
            
            <div className="text-center mb-8">
                <div className="inline-flex p-3 border border-neutral-800 bg-neutral-950 mb-6 rounded-full">
                    <Mail className="w-6 h-6 text-neutral-400" />
                </div>
                
                <p className="text-[10px] text-neutral-500 uppercase tracking-[0.3em] mb-2">
                    Primary Frequency
                </p>
                
                <a 
                    href="mailto:root@0xdelta.org" 
                    className="text-2xl font-bold text-white font-mono hover:text-neutral-300 transition-colors tracking-tighter"
                >
                    root@0xdelta.org
                </a>
            </div>

            {/* PROTOCOLOS */}
            <div className="bg-neutral-950 border border-neutral-800 p-6 rounded-sm">
                <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest mb-4 border-b border-neutral-800 pb-2">
                    // Communication_Protocols
                </p>
                
                <div className="space-y-4">
                    <div className="flex gap-3 items-start">
                        <Globe className="w-4 h-4 text-neutral-600 mt-0.5 shrink-0" />
                        <div>
                            <p className="text-xs font-bold text-white uppercase">General / Business</p>
                            <p className="text-[10px] text-neutral-500 leading-relaxed">
                                Standard cleartext email allowed.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3 items-start">
                        <ShieldAlert className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                        <div>
                            <p className="text-xs font-bold text-red-500 uppercase">Sensitive Intel / Leaks</p>
                            <p className="text-[10px] text-neutral-500 leading-relaxed">
                                <span className="text-white font-bold">PGP ENCRYPTION MANDATORY.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        {/* LADO DIREITO: CHAVE PGP COM SCROLL */}
        <div className="bg-neutral-950 p-8 flex flex-col h-full">
            <div className="flex justify-between items-center mb-4 border-b border-neutral-800 pb-4">
                <div className="flex items-center gap-2 text-neutral-400">
                    <Key className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">PGP_PUBLIC_KEY</span>
                </div>
                <button 
                    onClick={handleCopy}
                    className="flex items-center gap-2 text-[10px] uppercase font-bold text-neutral-500 hover:text-white transition-colors border border-neutral-800 hover:border-neutral-500 px-3 py-1 bg-black"
                >
                    {copied ? <span className="text-green-500">COPIED</span> : <span>COPY_KEY</span>}
                    {copied ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
                </button>
            </div>
            
            {/* CAIXA DE TEXTO COM SCROLL (A CORREÇÃO ESTÁ AQUI) */}
            <div className="flex-grow relative border border-neutral-800 bg-black">
                <div className="absolute inset-0 overflow-y-auto p-4 custom-scrollbar">
                    <pre className="font-mono text-[9px] text-neutral-500 whitespace-pre-wrap break-all leading-relaxed select-all">
{pgpKey}
                    </pre>
                </div>
            </div>
            
            <div className="mt-4 text-center">
                <p className="text-[9px] text-neutral-700 font-mono">
                    // FINGERPRINT: 29C7 138E 62E3 39CF CF67 E9FA B1D6 9660 A13D 37C2
                </p>
            </div>
        </div>

      </div>

    </div>
  );
};

export default SecureContact;
// "use client";
// import Image from "next/image";
// import { useState } from "react";
// import { toast } from "react-toastify";

// const FormContent = ({
//   handleSubmit,
//   loading,
// }: {
//   handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
//   loading: boolean;
// }) => (
//   <form className="space-y-4" onSubmit={handleSubmit}>
//     {[
//       { name: "nome", type: "text", placeholder: "Nome*" },
//       { name: "email", type: "email", placeholder: "E-mail corporativo*" },
//       { name: "cargo", type: "text", placeholder: "Cargo*" },
//       { name: "segmento", type: "text", placeholder: "Segmento da empresa*" },
//       {
//         name: "funcionarios",
//         type: "text",
//         placeholder: "Quantidade de funcionários*",
//       },
//       { name: "telefone", type: "tel", placeholder: "Telefone*" },
//     ].map(({ name, type, placeholder }) => (
//       <div key={name}>
//         <label htmlFor={name} className="block text-sm font-semibold mb-1">
//           {placeholder}
//         </label>
//         <input
//           id={name}
//           name={name}
//           type={type}
//           placeholder={placeholder}
//           className="w-full p-3 border border-[rgb(1,24,74)] rounded-lg"
//           required
//         />
//       </div>
//     ))}

//     <div>
//       <p className="font-semibold mb-2">
//         Selecione os E‑books que deseja baixar*
//       </p>
//       {[
//         "Recrutamento e Seleção",
//         "Treinamento e Desenvolvimento",
//         "Pesquisa de Clima",
//         "A base do Endomarketing",
//       ].map((label) => (
//         <label key={label} className="flex items-center mb-2">
//           <input type="checkbox" name="ebooks" value={label} className="mr-2" />
//           {label}
//         </label>
//       ))}
//     </div>

//     <p className="text-[11px] font-bold mb-2">* Campos obrigatórios</p>
//     <label className="text-[11px] flex items-start gap-2">
//       <input type="checkbox" required className="mt-1" />
//       Afirmo e concordo que as informações preenchidas por mim neste formulário
//       são verdadeiras, estou ciente que o time comercial da Incentive Plus
//       poderá em contato.
//     </label>

//     <button
//       type="submit"
//       className={`
//         w-full text-white font-bold py-3 px-6 rounded-3xl transition-colors
//         ${
//           loading
//             ? "bg-gray-400"
//             : "bg-gradient-to-r from-blue-400 to-green-500 hover:from-blue-500 hover:to-green-600"
//         }
//       `}
//       disabled={loading}
//     >
//       {loading ? "Enviando..." : "BAIXAR"}
//     </button>
//   </form>
// );

// const FormPlus = () => {
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);

//     const form = new FormData(e.currentTarget);
//     const ebooksSelecionados = form.getAll("ebooks") as string[];

//     if (ebooksSelecionados.length === 0) {
//       toast.error("Selecione pelo menos um e‑book para baixar.");
//       setLoading(false);
//       return;
//     }

//     const email = form.get("email")?.toString() || "";

//     // Lista de domínios pessoais a serem bloqueados
//     const domíniosPessoais = [
//       "gmail.com",
//       "hotmail.com",
//       "yahoo.com",
//       "outlook.com",
//       "live.com",
//       "icloud.com",
//       "bol.com.br",
//       "uol.com.br",
//       "terra.com.br",
//       "msn.com",
//       "aol.com",
//     ];

//     const emailCorporativoRegex =
//       /^[^@]+@(?!(gmail|hotmail|yahoo|outlook|live|icloud|bol|uol|terra|msn|aol)\.com(\.br)?$).*$/i;

//     if (!emailCorporativoRegex.test(email)) {
//       toast.error("Por favor, insira um e-mail corporativo válido.");
//       setLoading(false);
//       return;
//     }

//     const telefone = form.get("telefone")?.toString() || "";
//     const telefoneNumeros = telefone.replace(/\D/g, ""); // Remove tudo que não for número

//     if (telefoneNumeros.length < 10 || telefoneNumeros.length > 11) {
//       toast.error("Por favor, insira um número de telefone válido com DDD.");
//       setLoading(false);
//       return;
//     }

//     const data = {
//       nome: form.get("nome"),
//       email: form.get("email"),
//       cargo: form.get("cargo"),
//       segmento: form.get("segmento"),
//       funcionarios: form.get("funcionarios"),
//       telefone: form.get("telefone"),
//       ebooks: form.getAll("ebooks"),
//     };

//     const res = await fetch("/api/sendFormEbook", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });

//     if (res.ok) {
//       toast.success("Enviado com sucesso!");
//       baixarEbooks(data.ebooks as string[]);
//       // Opcional: limpa o formulário
//       (e.target as HTMLFormElement).reset();
//     } else {
//       toast.error("Falha ao enviar. Tente novamente.");
//     }
//     setLoading(false);
//   };

//   const baixarEbooks = (ebooksSelecionados: string[]) => {
//     const mapaEbooks: Record<string, string> = {
//       "Recrutamento e Seleção": "recrutamento.pdf",
//       "Treinamento e Desenvolvimento": "treinamento.pdf",
//       "Pesquisa de Clima": "clima.pdf",
//       "A base do Endomarketing": "endomarketing.pdf",
//     };

//     ebooksSelecionados.forEach((titulo) => {
//       const fileName = mapaEbooks[titulo];
//       if (fileName) {
//         const link = document.createElement("a");
//         link.href = `/pdfs/${fileName}`;
//         link.download = fileName;
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//       }
//     });
//   };

//   return (
//     <section className="relative overflow-visible">
//       {/* Seção azul com imagem */}
//       <div className="relative min-h-[500px] md:min-h-[600px] text-[rgb(1,7,74)]">
//         <Image
//           src="/images/fundoazul2.png"
//           alt=""
//           fill
//           className="object-cover pointer-events-none"
//         />
//         <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 h-full">
//           {/* Mobile */}
//           <div className="md:hidden text-center pt-16 pb-8">
//             <h2 className="text-3xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
//               Baixe nossos e‑books!
//             </h2>
//             <div className="w-[200px] h-12 mx-auto relative">
//               <Image
//                 src="/images/Vector2.png"
//                 alt=""
//                 fill
//                 className="object-contain"
//               />
//             </div>
//             <h4 className="text-white mt-4 text-lg">
//               Preencha suas informações no formulário para acessar seus e‑books
//               gratuitos
//             </h4>
//           </div>

//           {/* Desktop */}
//           <div className="hidden md:grid md:grid-cols-2 items-center h-full">
//             <div className="pt-[5rem] lg:ml-20">
//               <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
//                 Baixe nossos e‑books exclusivos gratuitamente!
//               </h2>
//               <div className="w-[400px] h-12 relative">
//                 <Image
//                   src="/images/Vector2.png"
//                   alt=""
//                   fill
//                   className="object-contain"
//                 />
//               </div>
//               <h4 className="text-white mt-6 text-lg">
//                 Preencha suas informações no formulário para acessar seus
//                 e‑books gratuitos
//               </h4>
//             </div>
//             <div />
//           </div>

//           {/* Formulário flutuante (desktop) */}
//           <div className="hidden md:block absolute top-[40%] right-8 lg:right-[15%] z-20 w-full max-w-md">
//             <div className="bg-white p-8 rounded-lg shadow-xl">
//               <FormContent handleSubmit={handleSubmit} loading={loading} />
//             </div>
//           </div>

//           {/* Formulário mobile (abaixo, posição padrão) */}
//           <div className="md:hidden px-4 pb-8">
//             <div className="bg-white p-6 rounded-lg shadow-xl">
//               <FormContent handleSubmit={handleSubmit} loading={loading} />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Fundo branco inferior */}
//       <div className="bg-white pt-[250px] pb-20"></div>
//     </section>
//   );
// };

// export default FormPlus;

"use client";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";

const FormContent = ({
  handleSubmit,
  loading,
}: {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean;
}) => {
  // Função para validar apenas letras, espaços e acentos
  const handleLettersOnly = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const char = e.key;
    // Permite letras, espaços, backspace, delete, tab, enter
    if (
      !/^[a-zA-ZÀ-ÿ\s]$/.test(char) &&
      !["Backspace", "Delete", "Tab", "Enter"].includes(char)
    ) {
      e.preventDefault();
    }
  };

  // Função para validar apenas números
  const handleNumbersOnly = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const char = e.key;
    // Permite números, backspace, delete, tab, enter
    if (
      !/^[0-9]$/.test(char) &&
      !["Backspace", "Delete", "Tab", "Enter"].includes(char)
    ) {
      e.preventDefault();
    }
  };

  // Função para formatar telefone
  const formatPhoneNumber = (value: string) => {
    // Remove tudo que não for número
    const numbers = value.replace(/\D/g, "");

    // Aplica máscara (XX) XXXXX-XXXX
    if (numbers.length <= 10) {
      return numbers.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    } else {
      return numbers.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    e.target.value = formatted;
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {/* Nome */}
      <div>
        <label htmlFor="nome" className="block text-sm font-semibold mb-1">
          Nome*
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          placeholder="Nome*"
          className="w-full p-3 border border-[rgb(1,24,74)] rounded-lg"
          required
          onKeyDown={handleLettersOnly}
          title="Digite apenas letras"
        />
      </div>

      {/* E-mail */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold mb-1">
          E-mail corporativo*
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="E-mail corporativo*"
          className="w-full p-3 border border-[rgb(1,24,74)] rounded-lg"
          required
        />
      </div>

      {/* Cargo */}
      <div>
        <label htmlFor="cargo" className="block text-sm font-semibold mb-1">
          Cargo*
        </label>
        <input
          id="cargo"
          name="cargo"
          type="text"
          placeholder="Cargo*"
          className="w-full p-3 border border-[rgb(1,24,74)] rounded-lg"
          required
          onKeyDown={handleLettersOnly}
          title="Digite apenas letras"
        />
      </div>

      {/* Segmento */}
      <div>
        <label htmlFor="segmento" className="block text-sm font-semibold mb-1">
          Segmento da empresa*
        </label>
        <input
          id="segmento"
          name="segmento"
          type="text"
          placeholder="Segmento da empresa*"
          className="w-full p-3 border border-[rgb(1,24,74)] rounded-lg"
          required
          onKeyDown={handleLettersOnly}
          title="Digite apenas letras"
        />
      </div>

      {/* Quantidade de funcionários */}
      <div>
        <label
          htmlFor="funcionarios"
          className="block text-sm font-semibold mb-1"
        >
          Quantidade de funcionários*
        </label>
        <input
          id="funcionarios"
          name="funcionarios"
          type="text"
          placeholder="Quantidade de funcionários*"
          className="w-full p-3 border border-[rgb(1,24,74)] rounded-lg"
          required
          onKeyDown={handleNumbersOnly}
          title="Digite apenas números"
        />
      </div>

      {/* Telefone */}
      <div>
        <label htmlFor="telefone" className="block text-sm font-semibold mb-1">
          Telefone*
        </label>
        <input
          id="telefone"
          name="telefone"
          type="tel"
          placeholder="Telefone*"
          className="w-full p-3 border border-[rgb(1,24,74)] rounded-lg"
          required
          onChange={handlePhoneChange}
          maxLength={15}
        />
      </div>

      {/* Checkboxes dos e-books */}
      <div>
        <p className="font-semibold mb-2">
          Selecione os E‑books que deseja baixar*
        </p>
        {[
          "Recrutamento e Seleção",
          "Treinamento e Desenvolvimento",
          "Pesquisa de Clima",
          "A base do Endomarketing",
        ].map((label) => (
          <label key={label} className="flex items-center mb-2">
            <input
              type="checkbox"
              name="ebooks"
              value={label}
              className="mr-2"
            />
            {label}
          </label>
        ))}
      </div>

      <p className="text-[11px] font-bold mb-2">* Campos obrigatórios</p>
      <label className="text-[11px] flex items-start gap-2">
        <input type="checkbox" required className="mt-1" />
        Afirmo e concordo que as informações preenchidas por mim neste
        formulário são verdadeiras, estou ciente que o time comercial da
        Incentive poderá em contato.
      </label>

      <button
        type="submit"
        className={`w-full text-white font-bold py-3 px-6 rounded-3xl transition-colors ${
          loading
            ? "bg-gray-400"
            : "bg-gradient-to-r from-blue-400 to-green-500 hover:from-blue-500 hover:to-green-600"
        }`}
        disabled={loading}
      >
        {loading ? "Enviando..." : "BAIXAR"}
      </button>
    </form>
  );
};

const FormPlus = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const ebooksSelecionados = form.getAll("ebooks") as string[];

    if (ebooksSelecionados.length === 0) {
      toast.error("Selecione pelo menos um e‑book para baixar.");
      setLoading(false);
      return;
    }

    const email = form.get("email")?.toString() || "";

    // Validação adicional para e-mail corporativo
    const emailCorporativoRegex =
      /^[^@]+@(?!(gmail|hotmail|yahoo|outlook|live|icloud|bol|uol|terra|msn|aol)\.com(\.br)?$).*$/i;

    if (!emailCorporativoRegex.test(email)) {
      toast.error("Por favor, insira um e-mail corporativo válido.");
      setLoading(false);
      return;
    }

    const telefone = form.get("telefone")?.toString() || "";
    const telefoneNumeros = telefone.replace(/\D/g, ""); // Remove tudo que não for número

    if (telefoneNumeros.length < 10 || telefoneNumeros.length > 11) {
      toast.error("Por favor, insira um número de telefone válido com DDD.");
      setLoading(false);
      return;
    }

    // Validação adicional para quantidade de funcionários
    const funcionarios = form.get("funcionarios")?.toString() || "";
    const numeroFuncionarios = parseInt(funcionarios);

    if (isNaN(numeroFuncionarios) || numeroFuncionarios <= 0) {
      toast.error("Por favor, insira uma quantidade válida de funcionários.");
      setLoading(false);
      return;
    }

    // Validação adicional para campos que devem conter apenas letras
    const nome = form.get("nome")?.toString() || "";
    const cargo = form.get("cargo")?.toString() || "";
    const segmento = form.get("segmento")?.toString() || "";

    const lettersOnlyRegex = /^[a-zA-ZÀ-ÿ\s]+$/;

    if (!lettersOnlyRegex.test(nome)) {
      toast.error("O nome deve conter apenas letras.");
      setLoading(false);
      return;
    }

    if (!lettersOnlyRegex.test(cargo)) {
      toast.error("O cargo deve conter apenas letras.");
      setLoading(false);
      return;
    }

    if (!lettersOnlyRegex.test(segmento)) {
      toast.error("O segmento deve conter apenas letras.");
      setLoading(false);
      return;
    }

    const data = {
      nome: form.get("nome"),
      email: form.get("email"),
      cargo: form.get("cargo"),
      segmento: form.get("segmento"),
      funcionarios: form.get("funcionarios"),
      telefone: form.get("telefone"),
      ebooks: form.getAll("ebooks"),
    };

    try {
      const res = await fetch("/api/sendFormEbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success("Enviado com sucesso!");
        baixarEbooks(data.ebooks as string[]);
        // Opcional: limpa o formulário
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error("Falha ao enviar. Tente novamente.");
      }
    } catch (error) {
      toast.error("Erro de conexão. Tente novamente.");
    }

    setLoading(false);
  };

  const baixarEbooks = (ebooksSelecionados: string[]) => {
    const mapaEbooks: Record<string, string> = {
      "Recrutamento e Seleção": "recrutamento.pdf",
      "Treinamento e Desenvolvimento": "treinamento.pdf",
      "Pesquisa de Clima": "clima.pdf",
      "A base do Endomarketing": "endomarketing.pdf",
    };

    ebooksSelecionados.forEach((titulo) => {
      const fileName = mapaEbooks[titulo];
      if (fileName) {
        const link = document.createElement("a");
        link.href = `/pdfs/${fileName}`;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    });
  };

  return (
    <section className="relative overflow-visible">
      {/* Seção azul com imagem */}
      <div className="relative min-h-[500px] md:min-h-[600px] text-[rgb(1,7,74)]">
        <Image
          src="/images/fundoazul2.png"
          alt=""
          fill
          className="object-cover pointer-events-none"
        />
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 h-full">
          {/* Mobile */}
          <div className="md:hidden text-center pt-16 pb-8">
            <h2 className="text-3xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
              Baixe nossos e‑books!
            </h2>
            <div className="w-[200px] h-12 mx-auto relative">
              <Image
                src="/images/Vector2.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <h4 className="text-white mt-4 text-lg">
              Preencha suas informações no formulário para acessar seus e‑books
              gratuitos
            </h4>
          </div>

          {/* Desktop */}
          <div className="hidden md:grid md:grid-cols-2 items-center h-full">
            <div className="pt-[5rem] lg:ml-20">
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
                Baixe nossos e‑books exclusivos gratuitamente!
              </h2>
              <div className="w-[400px] h-12 relative">
                <Image
                  src="/images/Vector2.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <h4 className="text-white mt-6 text-lg">
                Preencha suas informações no formulário para acessar seus
                e‑books gratuitos
              </h4>
            </div>
            <div />
          </div>

          {/* Formulário flutuante (desktop) */}
          <div className="hidden md:block absolute top-[40%] right-8 lg:right-[15%] z-20 w-full max-w-md">
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <FormContent handleSubmit={handleSubmit} loading={loading} />
            </div>
          </div>

          {/* Formulário mobile (abaixo, posição padrão) */}
          <div className="md:hidden px-4 pb-8">
            <div className="bg-white p-6 rounded-lg shadow-xl">
              <FormContent handleSubmit={handleSubmit} loading={loading} />
            </div>
          </div>
        </div>
      </div>

      {/* Fundo branco inferior */}
      <div className="bg-white pt-[250px] pb-20"></div>
    </section>
  );
};

export default FormPlus;

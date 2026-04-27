import { useNavigate } from "react-router-dom";

export default function PassageCard() {
  const navigate = useNavigate();

  return (
    <>
      {/* BUTTON CLOSE */}
      <button
        onClick={() => navigate("/notebook")}
        className="
          fixed
          top-6
          right-6
          z-50
          w-10
          h-10
          flex
          items-center
          justify-center
          rounded-full
          bg-white
          border
          border-slate-200
          shadow-sm
          hover:bg-slate-50
          hover:scale-105
          transition
        "
      >
        <span className="material-symbols-outlined text-slate-500">close</span>
      </button>

      <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-200 flex flex-col gap-6 relative overflow-hidden">
        {/* LEVEL BADGE */}
        <div className="absolute top-5 right-5">
          <span className="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Level B2
          </span>
        </div>

        {/* TITLE */}
        <h2 className="text-2xl font-bold text-slate-800">
          Environmental Protection
        </h2>

        {/* PASSAGE */}
        <p className="leading-8 text-slate-600 text-[17px] font-serif text-justify">
          <span className="text-primary font-semibold">Environmental</span>{" "}
          protection is an important issue in today’s world. Human activities
          such as pollution and{" "}
          <span className="text-red-500 underline decoration-wavy">
            deforestation
          </span>{" "}
          are causing serious damage to the environment.These actions lead to
          climate change, loss of biodiversity, and health problems for humans
          and animals. Therefore, it is essential for people to take
          responsibility for protecting the environment. Simple actions such as
          reducing waste, saving energy, planting trees, and using public
          transportation can make a big difference. By working together, we can
          create a cleaner and more sustainable future for the next generations.
        </p>

        {/* PRONUNCIATION HINT */}
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
          <div className="flex items-center gap-2 mb-2 text-slate-500">
            <span className="material-symbols-outlined text-primary">
              auto_awesome
            </span>
            <span className="text-sm font-semibold">Pronunciation Hint</span>
          </div>

          <p className="text-sm text-slate-600">
            The word{" "}
            <span className="font-bold text-primary">deforestation</span> is
            pronounced{" "}
            <span className="font-mono text-primary bg-primary/10 px-2 py-1 rounded">
              /ˌdiːˌfɒrɪˈsteɪʃən/
            </span>
            . Notice the stress on <b>"sta"</b>.
          </p>
        </div>
      </div>
    </>
  );
}

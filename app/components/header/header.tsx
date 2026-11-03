import logoIcon from "~/src/HuShine.webp"

const projectName = 'HuShine'; // temporarily

export function Header() {
  return (
    <header className="flex items-center justify-center">
        <div className="h-auto bg-component border-b-component border rounded-2xl mx-2 my-2 px-4 py-2">
            <div>
              <img src={logoIcon} alt="HuShine logo" className="h-12 w-12" />
              <h2>{projectName}</h2>
            </div>
        </div>
    </header>
  );
}

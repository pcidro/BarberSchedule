import Image from "next/image";

const Header = () => {
  return (
    <div className="border-b-2 border-[#818181] w-full">
      <header>
        <Image src="/logo.png" alt="Logo" width={150} height={50} />
      </header>
    </div>
  );
};

export default Header;

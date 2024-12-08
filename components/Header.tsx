import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
      <Image
        src="/logo.png" // Path to your logo file
        alt="My Logo"
        width={80} // Adjust width as needed
        height={20} // Adjust height as needed
        loading="lazy"
      />
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-gray-700 hover:text-blue-500">Home</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-500">About</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-500">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

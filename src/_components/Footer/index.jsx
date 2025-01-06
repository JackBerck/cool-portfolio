export default function Footer() {
  return (
    <footer className="section-padding-x pt-4 pb-4 normal-font-size text-light-base bg-dark-base flex items-center justify-center">
      <div className="max-w-screen-xl container">
        <div className="text-center">
          <p>
            &copy; {new Date().getFullYear()} <a href="https://instagram.com/zakidzlfkr_" className="text-blue-base">Ankit Kumar</a>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

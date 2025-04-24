const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      {/* <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div> */}

      <p className="text-white-500">© 2025 Usama Rahman Khan. All rights reserved.</p>

      <div className="flex gap-3">
        <a class="social-icon" href="https://linkedin.com/in/usamak23" target="_blank" rel="noreferrer">
          <img src="/assets/linkedin.svg" alt="linkedin" className="w-1/2 h-1/2" />
        </a>
        <a class="social-icon" href="https://github.com/urahmank" target="_blank" rel="noreferrer">
          <img src="/assets/github.svg" alt="linkedin" className="w-1/2 h-1/2" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

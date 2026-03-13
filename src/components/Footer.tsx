import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border py-10 px-6 md:px-12">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
      <div>
        <p className="text-xs uppercase tracking-wider font-sans text-muted-foreground mb-2">有疑问？</p>
        <a href="https://www.qiean.me/" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
          联系我们
        </a>
      </div>
      <div className="col-span-2">
        <p className="text-xs uppercase tracking-wider font-sans text-muted-foreground mb-3 text-center">快捷链接</p>
        <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
          <Link to="/" className="text-xs text-muted-foreground hover:text-foreground transition-colors">婚礼仪式与晚宴</Link>
          <Link to="/travel" className="text-xs text-muted-foreground hover:text-foreground transition-colors">交通住宿</Link>
          <Link to="/registry" className="text-xs text-muted-foreground hover:text-foreground transition-colors">礼物清单</Link>
          <Link to="/rsvp" className="text-xs text-muted-foreground hover:text-foreground transition-colors">回复邀请</Link>
        </div>
      </div>
      <div>
      </div>
    </div>
    <div className="text-center mt-8">
      <p className="text-[10px] text-muted-foreground/60">© 2026</p>
    </div>
  </footer>
);

export default Footer;

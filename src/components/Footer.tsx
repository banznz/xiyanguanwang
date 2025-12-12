import React from 'react';
import { Twitter, Github, Linkedin, Mail } from 'lucide-react';
import LogoPlaceholder from '../imports/LogoPlaceholder';

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 snap-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
               {/* Scale down the large imported logo */}
               <div className="origin-left transform scale-[0.25] w-[130px] overflow-visible">
                 <div className="w-[450px]"> 
                   <LogoPlaceholder />
                 </div>
               </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              让小说文字立即拥有生命力。
              新一代 AI 内容创作平台，赋能每一位创作者。
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">产品</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">剧本解析</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">角色引擎</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">视频生成</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">价格方案</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">资源</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">帮助中心</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">API 文档</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">社区</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">博客</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">联系我们</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 NovelVisual Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
             <a href="#" className="hover:text-gray-300">隐私政策</a>
             <a href="#" className="hover:text-gray-300">服务条款</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

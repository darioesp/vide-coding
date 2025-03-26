import AnchorLang from "../islands/AnchorLang.tsx";
export default function Footer() {
  return (
    <footer class="text-center text-xs w-full py-1 mt-10">
      <AnchorLang />
      <div class="py-1">
        Desarrollado por <a class="mx-1 text-blue-400" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/darioesp/">@darioesp</a>
        Con cariño desde un rincón de
        <svg class="ml-1 inline" version="1.1" width="15px" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 42" xml:space="preserve"><path id="Rounded_Rectangle_7_copy" fill="#FFFFFF" d="M5.8,0h52.3C61.4,0,64,2.6,64,5.7v30.6c0,3.2-2.6,5.7-5.8,5.7H5.8 C2.6,42,0,39.4,0,36.3V5.7C0,2.6,2.6,0,5.8,0z"></path> <path fill="#D42E12" d="M0,36.3C0,39.4,2.6,42,5.8,42h52.4c3.2,0,5.8-2.5,5.8-5.7V21H0V36.3z"></path> <path fill="#0034A8" d="M21,0H5.8C2.6,0,0,2.6,0,5.7V21h21V0z"></path> <polygon fill="#FFFFFF" points="10.8,4.9 12.3,9.8 17.4,9.8 13.3,12.7 14.9,17.6 10.8,14.6 6.6,17.6 8.2,12.7 4.1,9.8 9.2,9.8 "></polygon> </svg>
      </div>
      <div class="px-4 mt-1">
        Creado por 
        <a class="mx-1 text-cyan-600" rel="noopener noreferrer" target="_blank" href="https://x.com/peterwong_xyz/status/1898090027873452542">@peterwong_xyz</a>
         y traducido al español por <a class="ml-1 text-cyan-600" rel="noopener noreferrer" target="_blank" href="https://x.com/midudev" >@midudev</a>
      </div>
    </footer>
  );
}

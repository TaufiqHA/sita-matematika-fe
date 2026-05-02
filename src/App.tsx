import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  School, 
  User, 
  Mail, 
  Lock, 
  EyeOff, 
  IdCard, 
  ArrowRight, 
  CheckCircle2, 
  Contact, 
  UserRound 
} from 'lucide-react';

type AuthMode = 'login' | 'register';

export default function App() {
  const [mode, setMode] = useState<AuthMode>('login');

  return (
    <div className="flex w-full h-screen overflow-hidden bg-surface-bright font-sans selection:bg-secondary selection:text-white">
      <motion.div 
        layout
        className={`flex flex-1 w-full h-full transition-all duration-700 ease-in-out ${mode === 'register' ? 'lg:flex-row-reverse' : 'lg:flex-row'} flex-col`}
      >
        {/* Form Panel */}
        <div className="flex flex-1 flex-col justify-center bg-white px-6 lg:w-1/2 lg:px-20 xl:px-24 overflow-y-auto py-12">
          {/* Mobile Header - Visible only on small screens */}
          <div className="flex flex-col items-center mb-8 lg:hidden">
            <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center mb-2 shadow-sm">
              <School size={20} />
            </div>
            <span className="text-xl font-bold text-on-surface tracking-tight">SITA</span>
          </div>

          <AnimatePresence mode="wait">
            {mode === 'login' ? (
              <motion.div
                key="login-form"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mx-auto w-full max-w-[400px]"
              >
                <div className="hidden lg:flex flex-col items-center text-center gap-2 mb-8">
                  <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mb-2 shadow-lg">
                    <School size={28} />
                  </div>
                  <h1 className="text-3xl font-bold text-on-surface tracking-tight">SITA</h1>
                  <p className="text-sm text-on-surface-variant">Sistem Informasi Tugas Akhir</p>
                </div>

                <div className="text-center lg:text-left mb-6 lg:hidden">
                  <h2 className="text-2xl font-bold text-on-surface mb-1">Masuk ke Akun</h2>
                  <p className="text-sm text-on-surface-variant">Gunakan akun institusi Anda.</p>
                </div>

                <form className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-[12px] font-bold text-on-surface uppercase tracking-widest" htmlFor="identifier">Email atau NIM</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-on-surface-variant">
                        <User size={20} />
                      </div>
                      <input 
                        className="w-full pl-10 pr-3 py-3 bg-white border border-outline-variant rounded text-base text-on-surface placeholder:text-outline-variant focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors" 
                        id="identifier" 
                        placeholder="Masukkan Email atau NIM" 
                        type="text" 
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <label className="text-[12px] font-bold text-on-surface uppercase tracking-widest" htmlFor="password">Kata Sandi</label>
                      <button type="button" className="text-sm text-secondary font-medium hover:underline transition-all">Lupa Password?</button>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-on-surface-variant">
                        <Lock size={20} />
                      </div>
                      <input 
                        className="w-full pl-10 pr-3 py-3 bg-white border border-outline-variant rounded text-base text-on-surface placeholder:text-outline-variant focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors" 
                        id="password" 
                        placeholder="••••••••" 
                        type="password" 
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button className="w-full bg-primary text-white font-semibold py-4 rounded hover:bg-neutral-800 transition-colors flex justify-center items-center gap-2" type="button">
                      Masuk
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </form>

                <div className="mt-8 text-center text-sm text-on-surface-variant">
                  Belum punya akun?{' '}
                  <button 
                    onClick={() => setMode('register')}
                    className="font-semibold text-secondary hover:underline transition-all"
                  >
                    Daftar sekarang
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="register-form"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mx-auto w-full max-w-[440px]"
              >
                <div className="mb-10 text-left">
                  <h2 className="text-2xl font-bold text-on-surface mb-2">Buat Akun Baru</h2>
                  <p className="text-sm text-on-surface-variant">
                    Silakan lengkapi data diri Anda untuk mendapatkan akses ke sistem SITA.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="space-y-3">
                    <label className="block text-[12px] font-bold text-on-surface-variant uppercase tracking-widest italic">
                      Peran Pengguna
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <label className="relative cursor-pointer group">
                        <input name="role" type="radio" value="mahasiswa" defaultChecked className="peer sr-only" />
                        <div className="flex flex-col items-start p-4 rounded border border-outline-variant bg-white peer-checked:border-secondary peer-checked:bg-blue-50 transition-all duration-200">
                          <UserRound className="text-on-surface-variant mb-2 peer-checked:text-secondary" size={20} />
                          <span className="text-sm font-semibold text-on-surface">Mahasiswa</span>
                        </div>
                        <div className="absolute top-4 right-4 hidden peer-checked:block text-secondary">
                          <CheckCircle2 size={18} />
                        </div>
                      </label>
                      <label className="relative cursor-pointer group">
                        <input name="role" type="radio" value="dosen" className="peer sr-only" />
                        <div className="flex flex-col items-start p-4 rounded border border-outline-variant bg-white peer-checked:border-secondary peer-checked:bg-blue-50 transition-all duration-200">
                          <Contact className="text-on-surface-variant mb-2 peer-checked:text-secondary" size={20} />
                          <span className="text-sm font-semibold text-on-surface">Dosen</span>
                        </div>
                        <div className="absolute top-4 right-4 hidden peer-checked:block text-secondary">
                          <CheckCircle2 size={18} />
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[12px] font-bold text-on-surface-variant uppercase tracking-widest italic" htmlFor="nama">
                      Nama Lengkap
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-outline-variant">
                        <User size={20} />
                      </div>
                      <input 
                        className="block w-full pl-10 pr-3 py-3 border border-outline-variant rounded bg-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all placeholder:text-outline-variant/60" 
                        id="nama" 
                        placeholder="Masukkan nama lengkap sesuai identitas" 
                        type="text" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[12px] font-bold text-on-surface-variant uppercase tracking-widest italic" htmlFor="id_number">
                      NIM / NIP
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-outline-variant">
                        <IdCard size={20} />
                      </div>
                      <input 
                        className="block w-full pl-10 pr-3 py-3 border border-outline-variant rounded bg-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all placeholder:text-outline-variant/60" 
                        id="id_number" 
                        placeholder="Nomor Induk Mahasiswa / Pegawai" 
                        type="text" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[12px] font-bold text-on-surface-variant uppercase tracking-widest italic" htmlFor="email">
                      Email Institusi
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-outline-variant">
                        <Mail size={20} />
                      </div>
                      <input 
                        className="block w-full pl-10 pr-3 py-3 border border-outline-variant rounded bg-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all placeholder:text-outline-variant/60" 
                        id="email" 
                        placeholder="nama@kampus.ac.id" 
                        type="email" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[12px] font-bold text-on-surface-variant uppercase tracking-widest italic" htmlFor="password">
                      Kata Sandi
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-outline-variant">
                        <Lock size={20} />
                      </div>
                      <input 
                        className="block w-full pl-10 pr-10 py-3 border border-outline-variant rounded bg-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all placeholder:text-outline-variant/60" 
                        id="password" 
                        placeholder="Minimal 8 karakter" 
                        type="password" 
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-outline-variant hover:text-on-surface transition-colors">
                        <EyeOff size={20} />
                      </div>
                    </div>
                    <p className="text-[11px] text-on-surface-variant mt-1 italic">
                      Gunakan kombinasi huruf, angka, dan simbol.
                    </p>
                  </div>

                  <div className="pt-4">
                    <button className="w-full flex justify-center py-4 px-4 border border-transparent rounded bg-primary text-white font-semibold hover:bg-neutral-800 focus:outline-none transition-colors duration-200" type="submit">
                      Daftar
                    </button>
                  </div>
                </form>

                <div className="mt-8 text-center text-sm text-on-surface-variant">
                  Sudah punya akun?{' '}
                  <button 
                    onClick={() => setMode('login')}
                    className="font-semibold text-secondary hover:underline transition-all"
                  >
                    Masuk
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Branding/Image Panel */}
        <motion.div 
          layout
          className="hidden lg:flex lg:w-1/2 relative bg-surface-container-high flex-col justify-between p-10 overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <img 
              alt="SITA Academic Environment" 
              className="w-full h-full object-cover opacity-80 mix-blend-multiply" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw2ZJUcLpfz-mLfoHn-Qp9uYFUy6bpNNDLuAn3y4RW1tu12pUL5hdDVh8Y-Gix14kAwDfaMG3qDIUzqNC_z8ttUAaG4UpydMqK_POI0oRwLx1bhpWCPyPMPn1YBMsSSEpp9VMSplXB4W_gThTmpubseoPlBOcvJJZAI1yaR1SFLfQQcrEjLV7usEcK65jC0kWPz7eHqm0n05L6pkxNSyg6jyX05cbzhmmnmisa54zHKJO7o2qx8qfEfqgPwuQ7nPf4fpPT0wi22wn4" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent"></div>
          </div>

          <div className="relative z-10 flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded flex items-center justify-center shadow-sm">
              <School className="text-primary" size={24} />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">SITA</span>
          </div>
          
          <div className="relative z-10 max-w-md">
            <motion.h1 
              layout
              className="text-4xl font-bold text-white mb-4"
            >
              Sistem Informasi Tugas Akhir
            </motion.h1>
            <motion.p 
              layout
              className="text-lg text-white/90"
            >
              Platform terpadu untuk pengelolaan, pengawasan, dan pengarsipan tugas akhir dengan standar akademik yang presisi.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

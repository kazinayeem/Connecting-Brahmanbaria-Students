import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from '../components/common/SectionHeader';
import { departmentsList, batchesList } from '../data/membersData';
import { upazilasData } from '../data/upazilasData';
import { 
  UserPlus, CheckCircle2, ShieldCheck, Upload, 
  MapPin, GraduationCap, Hash, Mail, Phone, Droplet, 
  Sparkles, CreditCard, RefreshCw 
} from 'lucide-react';

const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

export const JoinPage = () => {
  const { t, lang } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: '',
    studentId: '',
    department: 'SWE',
    batch: '62nd Batch',
    email: '',
    phone: '',
    bloodGroup: 'B+',
    homeUpazila: 'ব্রাহ্মণবাড়িয়া সদর',
    currentAddress: '',
    photoPreview: null
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedId, setGeneratedId] = useState('');

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, photoPreview: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setGeneratedId(randomNum.toString());
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      studentId: '',
      department: 'SWE',
      batch: '62nd Batch',
      email: '',
      phone: '',
      bloodGroup: 'B+',
      homeUpazila: 'ব্রাহ্মণবাড়িয়া সদর',
      currentAddress: '',
      photoPreview: null
    });
  };

  const currentDeptObj = departmentsList.find(d => d.id === formData.department) || departmentsList[0];

  return (
    <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <SectionHeader
          badge={t('join.badge')}
          title={t('join.title')}
          subtitle={t('join.subtitle')}
        />

        {isSubmitted ? (
          /* Submission Success State with Digital Member Card */
          <div className="max-w-2xl mx-auto space-y-8 animate-fadeIn">
            <div className="p-8 rounded-3xl bg-white border border-emerald-200 shadow-soft-lg text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">
                {t('join.successTitle')}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-lg mx-auto">
                {t('join.successDesc')}
              </p>
            </div>

            {/* Generated Digital Student Membership Badge */}
            <div className="p-1 rounded-3xl bg-gradient-to-br from-brand-600 via-emerald-800 to-slate-900 shadow-2xl">
              <div className="rounded-[22px] bg-slate-900 p-6 sm:p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <img src="/logo.svg" alt="BSA-DIU" className="w-10 h-10 rounded-full ring-2 ring-emerald-400" />
                    <div>
                      <h4 className="text-base font-black tracking-tight text-white">BSA • DIU</h4>
                      <p className="text-[10px] text-emerald-400 font-semibold">Student Membership Card</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded-lg">
                    BSA-{generatedId}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden ring-2 ring-emerald-500/50 bg-slate-800 shrink-0 shadow-md">
                    {formData.photoPreview ? (
                      <img src={formData.photoPreview} alt={formData.fullName} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-500 text-xs font-bold">
                        BSA PHOTO
                      </div>
                    )}
                  </div>

                  <div className="flex-1 space-y-2 text-center sm:text-left">
                    <h5 className="text-xl font-black text-white">{formData.fullName || "Student Name"}</h5>
                    <p className="text-xs text-emerald-300 font-medium">
                      {lang === 'bn' ? currentDeptObj.nameBn : currentDeptObj.nameEn} • {formData.batch}
                    </p>
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1 text-[11px] text-slate-300">
                      <span className="bg-slate-800/80 px-2 py-0.5 rounded">ID: {formData.studentId}</span>
                      <span className="bg-slate-800/80 px-2 py-0.5 rounded">Upazila: {formData.homeUpazila}</span>
                      <span className="bg-crimson-900/80 text-crimson-200 font-bold px-2 py-0.5 rounded">Blood: {formData.bloodGroup}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-500">
                  <span>Daffodil International University</span>
                  <span>Issued: 2026</span>
                </div>
              </div>
            </div>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                <span>{lang === 'bn' ? 'আরেকটি আবেদন করুন' : 'Submit Another Application'}</span>
              </button>
            </div>
          </div>
        ) : (
          /* Application Form & Live Preview Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Form Column */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-soft">
              
              <div className="mb-6 pb-4 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">
                    {lang === 'bn' ? 'সদস্য নিবন্ধন ফরম' : 'Membership Application Form'}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {t('join.sampleNotice')}
                  </p>
                </div>
                <ShieldCheck className="w-6 h-6 text-brand-600" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t('join.fullName')} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Tanvir Ahmed / তানভীর আহমেদ"
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                  />
                </div>

                {/* Student ID & Blood Group */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t('join.studentId')} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.studentId}
                      onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                      placeholder="e.g. 221-15-XXXX"
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t('join.bloodGroup')} *
                    </label>
                    <select
                      value={formData.bloodGroup}
                      onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                    >
                      {bloodGroups.map(bg => (
                        <option key={bg} value={bg}>{bg}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Department & Batch */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t('join.department')} *
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                    >
                      {departmentsList.map(dept => (
                        <option key={dept.id} value={dept.id}>
                          {lang === 'bn' ? dept.nameBn : dept.nameEn}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t('join.batch')} *
                    </label>
                    <select
                      value={formData.batch}
                      onChange={(e) => setFormData({ ...formData, batch: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                    >
                      {batchesList.map(b => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t('join.email')} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="student@diu.edu.bd"
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t('join.phone')} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="017XXXXXXXX"
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                    />
                  </div>
                </div>

                {/* Home Upazila */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t('join.homeUpazila')} *
                  </label>
                  <select
                    value={formData.homeUpazila}
                    onChange={(e) => setFormData({ ...formData, homeUpazila: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                  >
                    {upazilasData.map(upz => (
                      <option key={upz.id} value={lang === 'bn' ? upz.nameBn : upz.nameEn}>
                        {lang === 'bn' ? upz.nameBn : upz.nameEn}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Current Living Address */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t('join.currentAddress')} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.currentAddress}
                    onChange={(e) => setFormData({ ...formData, currentAddress: e.target.value })}
                    placeholder="e.g. Daffodil Hall / Ashulia Mess / Mirpur"
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                  />
                </div>

                {/* Profile Photo */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t('join.profilePhoto')}
                  </label>
                  <div className="flex items-center gap-3">
                    <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-dashed border-slate-300 hover:border-brand-500 text-xs font-semibold text-slate-600 hover:text-brand-700 bg-slate-50 transition-colors">
                      <Upload className="w-4 h-4" />
                      <span>{lang === 'bn' ? 'ছবি নির্বাচন করুন' : 'Choose Photo'}</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="hidden"
                      />
                    </label>
                    {formData.photoPreview && (
                      <span className="text-xs text-emerald-600 font-bold">
                        ✓ {lang === 'bn' ? 'ছবি যুক্ত হয়েছে' : 'Photo Attached'}
                      </span>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-crimson-600 to-rose-600 hover:from-crimson-500 hover:to-rose-500 shadow-lg shadow-crimson-900/30 transition-transform transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    {t('join.submitBtn')}
                  </button>
                </div>
              </form>

            </div>

            {/* Live Card Preview Column */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="sticky top-24">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 mb-4 text-xs font-bold text-slate-600 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-brand-600" />
                    <span>{t('join.cardPreview')}</span>
                  </span>
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[10px]">
                    Live Preview
                  </span>
                </div>

                {/* Card Container */}
                <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-brand-950 to-slate-950 p-6 text-white shadow-xl border border-emerald-500/30 relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-5">
                    <div className="flex items-center gap-2.5">
                      <img src="/logo.svg" alt="BSA-DIU" className="w-8 h-8 rounded-full" />
                      <span className="text-sm font-black tracking-tight">BSA • DIU</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-slate-800 px-2 py-0.5 rounded">
                      Member Card
                    </span>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden bg-slate-800 ring-2 ring-emerald-500/40 shrink-0">
                      {formData.photoPreview ? (
                        <img src={formData.photoPreview} alt="Preview" className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-500 text-[10px] font-bold">
                          NO PHOTO
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white leading-tight">
                        {formData.fullName || (lang === 'bn' ? 'শিক্ষার্থীর নাম' : 'Student Name')}
                      </h4>
                      <p className="text-xs text-emerald-400 font-medium mt-0.5">
                        {lang === 'bn' ? currentDeptObj.nameBn : currentDeptObj.nameEn}
                      </p>
                      <p className="text-[11px] text-slate-400">{formData.batch}</p>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-[11px] text-slate-300 border-t border-slate-800 pt-3">
                    <div className="flex justify-between">
                      <span className="text-slate-500">{lang === 'bn' ? 'আইডি:' : 'ID:'}</span>
                      <span className="font-mono">{formData.studentId || '221-15-XXXX'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">{lang === 'bn' ? 'উপজেলা:' : 'Upazila:'}</span>
                      <span>{formData.homeUpazila}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">{lang === 'bn' ? 'রক্তের গ্রুপ:' : 'Blood:'}</span>
                      <span className="font-bold text-crimson-400">{formData.bloodGroup}</span>
                    </div>
                  </div>
                </div>

                {/* Membership perks callout */}
                <div className="mt-6 p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 text-xs text-emerald-950 space-y-2">
                  <h5 className="font-bold flex items-center gap-1.5 text-brand-800">
                    <Sparkles className="w-4 h-4 text-brand-600" />
                    <span>{lang === 'bn' ? 'সদস্যপদের সুবিধাসমূহ' : 'Membership Benefits'}</span>
                  </h5>
                  <ul className="space-y-1 text-slate-600 text-[11px]">
                    <li>• {lang === 'bn' ? 'ক্যাম্পাসে জরুরি রক্তদান সহায়তায় অগ্রাধিকার' : 'Priority 24/7 campus blood network'}</li>
                    <li>• {lang === 'bn' ? 'সিনিয়রদের সাথে সেমিস্টারভিত্তিক ফ্রি স্টাডি সার্কেল' : 'Free peer tutoring & course material access'}</li>
                    <li>• {lang === 'bn' ? 'অ্যালামনাই ক্যারিয়ার ওয়ার্কশপে ফ্রি রেজিস্ট্রেশন' : 'Exclusive alumni corporate career talks'}</li>
                    <li>• {lang === 'bn' ? 'বাৎসরিক রিইউনিয়ন ও সাংস্কৃতিক উৎসবে অংশগ্রহণ' : 'Invitation to annual reunions & cultural gala'}</li>
                  </ul>
                </div>

              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};

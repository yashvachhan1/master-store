'use client';

import { Settings, Save } from 'lucide-react';
import { useState } from 'react';

export default function AccountSettingsPage() {
    const [isSaving, setIsSaving] = useState(false);

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);
        setTimeout(() => setIsSaving(false), 800);
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm p-6 sm:p-8">

                <div className="border-b border-neutral-100 pb-6 mb-6">
                    <h2 className="text-2xl font-extrabold text-neutral-900 flex items-center gap-3">
                        <Settings className="w-6 h-6 text-neutral-400" />
                        Profile Settings
                    </h2>
                    <p className="text-neutral-500 mt-1">Update your personal information and contact details.</p>
                </div>

                <form onSubmit={handleSave} className="space-y-8 max-w-2xl">

                    {/* Personal Info */}
                    <section>
                        <h3 className="text-sm font-bold text-neutral-900 mb-4 uppercase tracking-wider">Personal Information</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-neutral-700 mb-1.5">First Name</label>
                                <input type="text" defaultValue="John" className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition-shadow bg-neutral-50 focus:bg-white" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-neutral-700 mb-1.5">Last Name</label>
                                <input type="text" defaultValue="Doe" className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition-shadow bg-neutral-50 focus:bg-white" />
                            </div>
                            <div className="sm:col-span-2">
                                <label className="block text-sm font-medium text-neutral-700 mb-1.5">Email Address</label>
                                <input type="email" defaultValue="john.doe@example.com" className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition-shadow bg-neutral-50 focus:bg-white" />
                            </div>
                            <div className="sm:col-span-2">
                                <label className="block text-sm font-medium text-neutral-700 mb-1.5">Phone Number</label>
                                <input type="tel" defaultValue="+1 (555) 123-4567" className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition-shadow bg-neutral-50 focus:bg-white" />
                            </div>
                        </div>
                    </section>

                    {/* Password Section */}
                    <section className="pt-6 border-t border-neutral-100">
                        <h3 className="text-sm font-bold text-neutral-900 mb-4 uppercase tracking-wider">Security</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-neutral-700 mb-1.5">Current Password</label>
                                <input type="password" placeholder="••••••••" className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition-shadow bg-neutral-50 focus:bg-white" />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">New Password</label>
                                    <input type="password" placeholder="Leave blank to keep current" className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition-shadow bg-neutral-50 focus:bg-white" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Confirm New Password</label>
                                    <input type="password" placeholder="Must match new password" className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition-shadow bg-neutral-50 focus:bg-white" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Save Button */}
                    <div className="pt-8 flex justify-end">
                        <button
                            type="submit"
                            disabled={isSaving}
                            className="bg-black text-white hover:bg-neutral-800 disabled:bg-neutral-400 font-bold px-8 py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-black/10"
                        >
                            {isSaving ? 'Saving...' : <><Save className="w-4 h-4" /> Save Changes</>}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}

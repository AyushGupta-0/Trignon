import GlassCard from "../../components/GlassCard";

export default function SignInPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-8">
      <GlassCard className="w-full max-w-md flex flex-col items-center gap-6">
        <h1 className="text-2xl font-bold">Sign In</h1>
        <button className="flex items-center gap-2 px-6 py-3 bg-glass/40 border border-white/10 rounded shadow hover:bg-primary/80 transition text-lg font-medium text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21.805 10.023h-9.765v3.977h5.617c-.242 1.242-1.484 3.648-5.617 3.648-3.375 0-6.125-2.789-6.125-6.148 0-3.359 2.75-6.148 6.125-6.148 1.922 0 3.211.82 3.953 1.523l2.703-2.625c-1.727-1.617-3.953-2.617-6.656-2.617-5.523 0-10 4.477-10 10s4.477 10 10 10c5.781 0 9.594-4.055 9.594-9.773 0-.656-.07-1.148-.156-1.477z" fill="#4285F4"></path><path d="M3.152 7.345l3.289 2.414c.898-1.367 2.367-2.227 4.059-2.227 1.109 0 2.117.383 2.906 1.008l2.766-2.688c-1.484-1.367-3.398-2.207-5.672-2.207-3.438 0-6.344 2.344-7.406 5.508z" fill="#34A853"></path><path d="M12.5 22c2.484 0 4.57-.82 6.094-2.227l-2.812-2.305c-.773.547-1.773.875-3.281.875-2.523 0-4.664-1.703-5.438-4.008l-3.32 2.563c1.523 3.07 4.734 5.102 8.757 5.102z" fill="#FBBC05"></path><path d="M21.805 10.023h-9.765v3.977h5.617c-.242 1.242-1.484 3.648-5.617 3.648-3.375 0-6.125-2.789-6.125-6.148 0-3.359 2.75-6.148 6.125-6.148 1.922 0 3.211.82 3.953 1.523l2.703-2.625c-1.727-1.617-3.953-2.617-6.656-2.617-5.523 0-10 4.477-10 10s4.477 10 10 10c5.781 0 9.594-4.055 9.594-9.773 0-.656-.07-1.148-.156-1.477z" fill="#4285F4"></path></g></svg>
          Sign in with Google
        </button>
      </GlassCard>
    </div>
  );
} 
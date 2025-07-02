import GlassCard from "../../components/GlassCard";
import PrimaryButton from "../../components/PrimaryButton";

const user = {
  name: "John Doe",
  email: "johndoe@email.com",
  avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  courses: [
    { title: "Physics XI", status: "Active", nextPayment: "2024-08-01", amount: "₹1999" },
    { title: "Maths X", status: "Expired", nextPayment: null, amount: "₹1499" },
  ],
  subscription: {
    status: "Active",
    renewal: "2024-08-01",
    plan: "Premium",
  },
  payments: [
    { date: "2024-07-01", course: "Physics XI", amount: "₹1999", status: "Success" },
    { date: "2024-06-01", course: "Maths X", amount: "₹1499", status: "Success" },
  ],
};

export default function ProfilePage() {
  return (
    <div className="max-w-3xl mx-auto p-8 flex flex-col gap-8">
      <GlassCard className="flex items-center gap-6">
        <img src={user.avatar} alt={user.name} className="w-20 h-20 rounded-full object-cover border-4 border-primary shadow-glass" />
        <div>
          <div className="text-2xl font-bold mb-1">{user.name}</div>
          <div className="text-gray-500 dark:text-gray-300 mb-1">{user.email}</div>
          <PrimaryButton className="mt-2">Edit Profile</PrimaryButton>
        </div>
      </GlassCard>

      <GlassCard>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <div>
            <div className="font-semibold text-lg">Subscription</div>
            <div className="text-primary font-bold">{user.subscription.status} ({user.subscription.plan})</div>
            <div className="text-xs text-gray-500">Renewal: {user.subscription.renewal}</div>
          </div>
          <PrimaryButton>Manage Subscription</PrimaryButton>
        </div>
      </GlassCard>

      <GlassCard>
        <div className="font-semibold text-lg mb-2">My Courses</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {user.courses.map((course, i) => (
            <div key={i} className="bg-white/40 dark:bg-glassDark/40 rounded-xl p-4 flex flex-col gap-2 border border-black/10 dark:border-white/10">
              <div className="font-semibold">{course.title}</div>
              <div className="text-xs text-gray-500">Status: <span className="font-bold text-primary">{course.status}</span></div>
              {course.nextPayment && <div className="text-xs text-gray-500">Next Payment: {course.nextPayment}</div>}
              <div className="text-xs text-gray-500">Amount: {course.amount}</div>
              <PrimaryButton className="mt-2 text-sm">View Lectures</PrimaryButton>
            </div>
          ))}
        </div>
      </GlassCard>

      <GlassCard>
        <div className="font-semibold text-lg mb-2">Payment History</div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="py-2 pr-4">Date</th>
                <th className="py-2 pr-4">Course</th>
                <th className="py-2 pr-4">Amount</th>
                <th className="py-2 pr-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {user.payments.map((p, i) => (
                <tr key={i} className="border-t border-black/10 dark:border-white/10">
                  <td className="py-2 pr-4">{p.date}</td>
                  <td className="py-2 pr-4">{p.course}</td>
                  <td className="py-2 pr-4">{p.amount}</td>
                  <td className="py-2 pr-4">{p.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>

      <GlassCard>
        <div className="font-semibold text-lg mb-2">Account Settings</div>
        <PrimaryButton className="mt-2">Change Password</PrimaryButton>
        <PrimaryButton className="mt-2">Logout</PrimaryButton>
      </GlassCard>
    </div>
  );
} 
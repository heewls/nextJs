export const metadata = {
    title: "About Us",
};

export default function AboutUsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
            Next JS is great!
        </div>
    );
}

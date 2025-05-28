import withAuth from "next-auth/middleware";

export default withAuth({
    callbacks: {
        authorized: ({ token }) => {
            console.log(token)
            // Check if the user has the 'admin' role
            return !!token; // Return true if the token exists, meaning the user is authenticated
        }
    },
    pages: {
        signIn: "/login", // Redirect to this page if not authenticated
    },
});

export const config = {
    // "/" のみ認証必須にする
    matcher: ['/'],
};
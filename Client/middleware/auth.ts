export default defineNuxtRouteMiddleware(
    (to, from) => {
        const tokenCookie = useCookie<string|null>("token")
        if (!tokenCookie.value) return navigateTo("/auth/login")

        return
    }
)
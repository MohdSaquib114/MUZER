import { prismaClient } from "@/app/lib/db"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { signIn } from "next-auth/react"

export const provider_config = {
    providers:[
      GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID ?? "",
          clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
          // allowDangerousEmailAccountLinking: true,
        })
        
    ],
    secret: process.env.NEXTAUTH_SECRET ?? "secret",
    callbacks:{
        async signIn(params:any) {
            if(!params.user.email){
                return false
            }
            try {
                await prismaClient.user.create({
                    data:{
                        email:params.user.email,
                        provider:"Google"
                    }
                })
            } catch (error) {
                
            }
            return true
        }
    }
  }

const handler = NextAuth(provider_config)

export {handler as  GET, handler as POST}
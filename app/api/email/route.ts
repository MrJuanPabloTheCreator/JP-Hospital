
import AppleReceiptEmail from '@/app/components/emails/apple-receipt';
import { EmailTemplate } from '@/app/components/emails/emailtemplate';
import { ReactElement } from 'react';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {

    try {
        const formData = await req.json();
        const { doctor_id, date, time, firstName, lastName, confirmEmail } = formData;
        console.log('from POST EMAIL API:', formData)
        const data = await resend.emails.send({
            from: 'JP Hospital <onboarding@resend.dev>',
            to: `${confirmEmail}`,
            subject: 'Confirmation Email',
            html: '<p>Congrats on sending your <strong>first email</strong>!</p>',
            // react: EmailTemplate({ firstName: `${firstName}` }),
            // react: AppleReceiptEmail(),
        });

    return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}
export async function validatePhoneNumber(phone: string) {
  try {
    const response = await fetch('https://ogrbfxrnaoxmvimdqpgs.supabase.co/functions/v1/validate-phone', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
      },
      body: JSON.stringify({ phone })
    });

    if (!response.ok) {
      throw new Error('Error validating phone number');
    }

    const data = await response.json();
    return {
      isValid: data.isValid,
      isMobile: data.isMobile,
      carrier: data.carrier,
      countryCode: data.countryCode
    };
  } catch (error) {
    console.error('Error validating phone:', error);
    throw error;
  }
}
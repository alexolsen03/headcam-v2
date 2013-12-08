Rails.application.config.middleware.use OmniAuth::Builder do
	provider :facebook, '203730656477653', '85ae97870ca3efd0c243461df2e6d21b'	
	provider :twitter, 'OdYgpxWxUhhCNDLW2ewMQQ', 'csJo9RA7Bih9heXB3JQ6afIhzc0O3p8M0hCcQfTjaY'
end
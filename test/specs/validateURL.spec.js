describe('URL Validation Test', () => {
    it('should navigate to <https://ultralesson.ai/> and validate the URL', async () => {
        await browser.url('<https://ultralesson.ai/>');
        const currentURL = await browser.getUrl();
        expect(currentURL).to.equal('<https://ultralesson.ai/>');
    });
});
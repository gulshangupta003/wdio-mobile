Feature: Home Screen Validations
    @Test1
    Scenario: Validate if the product title is visible and text is matched
        Given User navigates to home screen
        Then Validate if the product title is displayed
        Then Validate if the product title is matched
@Test2
Scenario: Validate if the products are visible and matched with the given text
    Given User navigates to home screen and tries to find the product with &lt;productText&gt;
    Then Validate if the product text is matched to &lt;productText&gt; and is displayed
    Examples:
        | productText           |
        | Sauce Labs Backpack   |
        | Sauce Labs Bike Light |
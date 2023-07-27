import { mount } from "@vue/test-utils";
import MyButton from "@/components/UI/MyButton.vue";

describe("MyButton", () => {
  it("renders the button with default class and text", () => {
    const wrapper = mount(MyButton);

    // Check if the button element exists and has the default class
    const buttonElement = wrapper.find("button");
    expect(buttonElement.exists()).toBe(true);
    expect(buttonElement.classes()).toContain("button");

    // Check if the default slot content ("Text") is rendered inside the button
    expect(buttonElement.text()).toBe("Text");
  });

  it("renders the button with variant class and custom text when provided", () => {
    const variant = "delete";
    const buttonText = "Delete Item";
    const wrapper = mount(MyButton, {
      props: {
        variant,
      },
      slots: {
        default: buttonText,
      },
    });

    // Check if the button element exists and has the variant class
    const buttonElement = wrapper.find("button");
    expect(buttonElement.exists()).toBe(true);
    expect(buttonElement.classes()).toContain("button");
    expect(buttonElement.classes()).toContain("button-delete");

    // Check if the provided slot content ("Delete Item") is rendered inside the button
    expect(buttonElement.text()).toBe(buttonText);
  });
});

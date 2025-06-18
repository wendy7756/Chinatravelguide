---
import { Icon } from "astro-icon/components";

/**
 *  * Notes:
 *  if this is to be a link (<a>), pass an "href" prop
 *  if this is to be a button (<button>), pass a "type" prop
 *  you can pass the arrow prop with "left" or "right" to add an arrow to any button variant
 */
interface Props {
	type?: "button" | "submit" | "reset" | null | undefined;
	variant?: "primary" | "secondary" | "outline" | "ghost";
	href?: string; // the href to go to, ex "/posts/"
	target?: string; // the target for the link, ex "_blank"
	rel?: string; // the rel for the link, ex "noopener"
	arrow?: "left" | "right" | "none";
	onclick?: any; // any onclick events
	class?: string; // any additional classes
	rest?: any; // catch-all for any additional parameters, such as "aria-label"
}

const {
	type,
	variant = "primary",
	href,
	arrow = "none",
	onclick,
	class: className,
	...rest
} = Astro.props as Props;
---

<!-- normal link -->{
	href && (
		<a
			class:list={[
				className,
				`button group gap-2`,
				{
					"button--primary": variant === "primary",
				},
				{
					"button--secondary": variant === "secondary",
				},
				{
					"button--outline": variant === "outline",
				},
				{
					"button--ghost": variant === "ghost",
				},
			]}
			href={href}
			onclick={onclick}
			{...rest}
		>
			{arrow === "left" && (
				<Icon
					name="mynaui/arrow-long-right"
					class="h-[1.4em] w-[1.4em] rotate-180 transition-[transform]"
					aria-hidden="true"
				/>
			)}
			<span>
				<slot />
			</span>
			{arrow === "right" && (
				<Icon
					name="mynaui/arrow-long-right"
					class="h-[1.4em] w-[1.4em] transition-[transform]"
					aria-hidden="true"
				/>
			)}
		</a>
	)
}

<!-- button for "submit" or other -->
{
	!href && (
		<button
			class:list={[
				className,
				`button group gap-2`,
				{
					"button--primary": variant === "primary",
				},
				{
					"button--secondary": variant === "secondary",
				},
				{
					"button--outline": variant === "outline",
				},
				{
					"button--ghost": variant === "ghost",
				},
			]}
			type={type}
			onclick={onclick}
			{...rest}
		>
			{arrow === "left" && (
				<Icon
					name="mynaui/arrow-long-right"
					class="h-[1.4em] w-[1.4em] rotate-180 transition-[transform]"
					aria-hidden="true"
				/>
			)}
			<span>
				<slot />
			</span>
			{arrow === "right" && (
				<Icon
					name="mynaui/arrow-long-right"
					class="h-[1.4em] w-[1.4em] transition-[transform]"
					aria-hidden="true"
				/>
			)}
		</button>
	)
}

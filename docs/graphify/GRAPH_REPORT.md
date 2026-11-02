# Graph Report - g7  (2026-11-02)

## Corpus Check
- 83 files · ~78,044 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 2, .bat 2, .db 1)

## Summary
- 632 nodes · 1299 edges · 47 communities (31 shown, 16 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- react
- carousel.tsx
- utils.ts
- sidebar.tsx
- use-toast.ts
- lucide-react
- dependencies
- cn()
- next
- package.json
- compilerOptions
- menubar.tsx
- devDependencies
- components.json
- context-menu.tsx
- form.tsx
- dropdown-menu.tsx
- chart.tsx
- navigation-menu.tsx
- sheet.tsx
- scripts
- eslint.config.mjs
- @prisma/client
- input-otp.tsx
- accordion.tsx
- popover.tsx
- next-themes
- collapsible.tsx
- hover-card.tsx
- resizable.tsx
- tailwindcss
- @radix-ui/react-aspect-ratio
- setup-windows.ps1
- @dnd-kit/core@^6.3.1
- @dnd-kit/sortable@^10.0.0
- @dnd-kit/utilities@^3.2.2
- framer-motion@^12.23.2
- @mdxeditor/editor@^3.39.1
- next-intl@^4.3.4
- prisma@^6.11.1
- @radix-ui/react-avatar
- @radix-ui/react-dropdown-menu
- @radix-ui/react-progress
- @radix-ui/react-tabs
- zustand@^5.0.6
- postcss.config.mjs

## God Nodes (most connected - your core abstractions)
1. `cn()` - 232 edges
2. `react` - 50 edges
3. `lucide-react` - 23 edges
4. `Home()` - 23 edges
5. `Button()` - 17 edges
6. `compilerOptions` - 17 edges
7. `SessionPage()` - 11 edges
8. `scripts` - 10 edges
9. `class-variance-authority` - 10 edges
10. `buttonVariants` - 9 edges

## Surprising Connections (you probably didn't know these)
- `SocketDemo()` --calls--> `Button()`  [EXTRACTED]
  examples/websocket/page.tsx → src/components/ui/button.tsx
- `SocketDemo()` --calls--> `Input()`  [EXTRACTED]
  examples/websocket/page.tsx → src/components/ui/input.tsx
- `SocketDemo()` --calls--> `Card()`  [EXTRACTED]
  examples/websocket/page.tsx → src/components/ui/card.tsx
- `SocketDemo()` --calls--> `CardContent()`  [EXTRACTED]
  examples/websocket/page.tsx → src/components/ui/card.tsx
- `SocketDemo()` --calls--> `CardHeader()`  [EXTRACTED]
  examples/websocket/page.tsx → src/components/ui/card.tsx

## Import Cycles
- None detected.

## Communities (47 total, 16 thin omitted)

### Community 0 - "react"
Cohesion: 0.09
Nodes (43): Message, SocketDemo(), react, categories, difficulties, experienceLevels, focusAreas, Home() (+35 more)

### Community 1 - "carousel.tsx"
Cohesion: 0.06
Nodes (39): embla-carousel-react@^8.6.0, @radix-ui/react-alert-dialog@^1.1.14, react-day-picker@^9.8.0, embla-carousel-react, @radix-ui/react-alert-dialog, react-day-picker, AlertDialogAction(), AlertDialogCancel() (+31 more)

### Community 2 - "utils.ts"
Cohesion: 0.06
Nodes (29): clsx@^2.1.1, @radix-ui/react-slider@^1.3.5, @radix-ui/react-switch@^1.2.5, @radix-ui/react-toggle@^1.1.9, @radix-ui/react-toggle-group@^1.1.10, tailwind-merge@^3.3.1, vaul@^1.1.2, class-variance-authority (+21 more)

### Community 3 - "sidebar.tsx"
Cohesion: 0.08
Nodes (33): Input(), SidebarContent(), SidebarContext, SidebarContextProps, SidebarFooter(), SidebarGroup(), SidebarGroupAction(), SidebarGroupContent() (+25 more)

### Community 4 - "use-toast.ts"
Cohesion: 0.09
Nodes (31): @radix-ui/react-toast@^1.2.14, @radix-ui/react-toast, geistMono, geistSans, metadata, RootLayout(), Toast, ToastAction (+23 more)

### Community 5 - "lucide-react"
Cohesion: 0.08
Nodes (29): cmdk@^1.1.1, lucide-react@^0.525.0, @radix-ui/react-checkbox@^1.3.2, @radix-ui/react-dialog@^1.1.14, @radix-ui/react-radio-group@^1.3.7, cmdk, lucide-react, @radix-ui/react-checkbox (+21 more)

### Community 6 - "dependencies"
Cohesion: 0.08
Nodes (25): dependencies, class-variance-authority@^0.7.1, @hookform/resolvers@^5.1.1, @radix-ui/react-scroll-area@^1.2.9, @radix-ui/react-select@^2.2.5, @radix-ui/react-separator@^1.1.7, @radix-ui/react-tooltip@^1.2.7, react@^19.0.0 (+17 more)

### Community 7 - "cn()"
Cohesion: 0.16
Nodes (18): Avatar(), AvatarFallback(), AvatarImage(), BreadcrumbEllipsis(), BreadcrumbItem(), BreadcrumbLink(), BreadcrumbList(), BreadcrumbPage() (+10 more)

### Community 8 - "next"
Cohesion: 0.13
Nodes (13): nextConfig, next@15.3.5, socket.io@^4.8.1, z-ai-web-dev-sdk@^0.0.10, next, socket.io, z-ai-web-dev-sdk, createCustomServer() (+5 more)

### Community 9 - "package.json"
Cohesion: 0.10
Nodes (19): axios@^1.10.0, date-fns@^4.1.0, next-auth@^4.24.11, react-dom@^19.0.0, react-markdown@^10.1.0, @tanstack/react-query@^5.82.0, @tanstack/react-table@^8.21.3, tsx@^4.20.3 (+11 more)

### Community 10 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 11 - "menubar.tsx"
Cohesion: 0.11
Nodes (14): @radix-ui/react-menubar@^1.1.15, @radix-ui/react-menubar, Menubar(), MenubarCheckboxItem(), MenubarContent(), MenubarItem(), MenubarLabel(), MenubarPortal() (+6 more)

### Community 12 - "devDependencies"
Cohesion: 0.11
Nodes (19): devDependencies, eslint@^9, eslint-config-next@15.3.5, nodemon@^3.1.10, @tailwindcss/postcss@^4, tw-animate-css@^1.3.5, @types/node@^20, @types/react@^19 (+11 more)

### Community 13 - "components.json"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, iconLibrary, rsc (+9 more)

### Community 14 - "context-menu.tsx"
Cohesion: 0.11
Nodes (11): @radix-ui/react-context-menu@^2.2.15, @radix-ui/react-context-menu, ContextMenuCheckboxItem(), ContextMenuContent(), ContextMenuItem(), ContextMenuLabel(), ContextMenuRadioItem(), ContextMenuSeparator() (+3 more)

### Community 15 - "form.tsx"
Cohesion: 0.14
Nodes (16): @radix-ui/react-label@^2.1.7, @radix-ui/react-slot@^1.2.3, react-hook-form@^7.60.0, @radix-ui/react-label, @radix-ui/react-slot, react-hook-form, FormControl(), FormDescription() (+8 more)

### Community 16 - "dropdown-menu.tsx"
Cohesion: 0.12
Nodes (9): DropdownMenuCheckboxItem(), DropdownMenuContent(), DropdownMenuItem(), DropdownMenuLabel(), DropdownMenuRadioItem(), DropdownMenuSeparator(), DropdownMenuShortcut(), DropdownMenuSubContent() (+1 more)

### Community 18 - "chart.tsx"
Cohesion: 0.22
Nodes (12): recharts@^2.15.4, recharts, ChartConfig, ChartContainer(), ChartContext, ChartContextProps, ChartLegendContent(), ChartStyle() (+4 more)

### Community 19 - "navigation-menu.tsx"
Cohesion: 0.20
Nodes (11): @radix-ui/react-navigation-menu@^1.2.13, @radix-ui/react-navigation-menu, NavigationMenu(), NavigationMenuContent(), NavigationMenuIndicator(), NavigationMenuItem(), NavigationMenuLink(), NavigationMenuList() (+3 more)

### Community 20 - "sheet.tsx"
Cohesion: 0.26
Nodes (9): Sheet(), SheetContent(), SheetDescription(), SheetFooter(), SheetHeader(), SheetOverlay(), SheetPortal(), SheetTitle() (+1 more)

### Community 21 - "scripts"
Cohesion: 0.20
Nodes (10): scripts, build, db:generate, db:migrate, db:push, db:reset, db:seed, dev (+2 more)

### Community 22 - "eslint.config.mjs"
Cohesion: 0.22
Nodes (6): compat, __dirname, eslintConfig, __filename, @eslint/eslintrc@^3, @eslint/eslintrc

### Community 23 - "@prisma/client"
Cohesion: 0.25
Nodes (5): @prisma/client@^6.11.1, prisma, @prisma/client, db, globalForPrisma

### Community 24 - "input-otp.tsx"
Cohesion: 0.29
Nodes (5): input-otp@^1.4.2, input-otp, InputOTP(), InputOTPGroup(), InputOTPSlot()

### Community 25 - "accordion.tsx"
Cohesion: 0.29
Nodes (5): @radix-ui/react-accordion@^1.2.11, @radix-ui/react-accordion, AccordionContent(), AccordionItem(), AccordionTrigger()

### Community 26 - "popover.tsx"
Cohesion: 0.29
Nodes (3): @radix-ui/react-popover@^1.1.14, @radix-ui/react-popover, PopoverContent()

### Community 27 - "next-themes"
Cohesion: 0.33
Nodes (4): next-themes@^0.4.6, sonner@^2.0.6, next-themes, sonner

### Community 29 - "hover-card.tsx"
Cohesion: 0.33
Nodes (3): @radix-ui/react-hover-card@^1.1.14, @radix-ui/react-hover-card, HoverCardContent()

### Community 30 - "resizable.tsx"
Cohesion: 0.33
Nodes (4): react-resizable-panels@^3.0.3, react-resizable-panels, ResizableHandle(), ResizablePanelGroup()

### Community 31 - "tailwindcss"
Cohesion: 0.33
Nodes (5): tailwindcss-animate@^1.0.7, tailwindcss@^4, tailwindcss, tailwindcss-animate, config

### Community 33 - "setup-windows.ps1"
Cohesion: 0.83
Nodes (3): Install-Chocolatey(), Install-ChocoPackage(), Test-Command()

## Knowledge Gaps
- **16 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn()` to `react`, `carousel.tsx`, `utils.ts`, `sidebar.tsx`, `use-toast.ts`, `lucide-react`, `menubar.tsx`, `context-menu.tsx`, `form.tsx`, `dropdown-menu.tsx`, `chart.tsx`, `navigation-menu.tsx`, `sheet.tsx`, `input-otp.tsx`, `accordion.tsx`, `popover.tsx`, `hover-card.tsx`, `resizable.tsx`?**
  _High betweenness centrality (0.324) - this node is a cross-community bridge._
- **Should `react` be split into smaller, more focused modules?**
  _Cohesion score 0.09022556390977443 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `carousel.tsx`, `utils.ts`, `sidebar.tsx`, `use-toast.ts`, `lucide-react`, `dependencies`, `cn()`, `package.json`, `menubar.tsx`, `context-menu.tsx`, `form.tsx`, `dropdown-menu.tsx`, `chart.tsx`, `navigation-menu.tsx`, `sheet.tsx`, `input-otp.tsx`, `accordion.tsx`, `popover.tsx`, `hover-card.tsx`, `resizable.tsx`?**
  _High betweenness centrality (0.158) - this node is a cross-community bridge._
- **Should `carousel.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06382978723404255 - nodes in this community are weakly interconnected._
- **Why does `dependencies` connect `dependencies` to `carousel.tsx`, `utils.ts`, `use-toast.ts`, `lucide-react`, `next`, `package.json`, `menubar.tsx`, `context-menu.tsx`, `form.tsx`, `chart.tsx`, `navigation-menu.tsx`, `@prisma/client`, `input-otp.tsx`, `accordion.tsx`, `popover.tsx`, `next-themes`, `collapsible.tsx`, `hover-card.tsx`, `resizable.tsx`, `tailwindcss`, `@radix-ui/react-aspect-ratio`, `@dnd-kit/core@^6.3.1`, `@dnd-kit/sortable@^10.0.0`, `@dnd-kit/utilities@^3.2.2`, `framer-motion@^12.23.2`, `@mdxeditor/editor@^3.39.1`, `next-intl@^4.3.4`, `prisma@^6.11.1`, `@radix-ui/react-avatar`, `@radix-ui/react-dropdown-menu`, `@radix-ui/react-progress`, `@radix-ui/react-tabs`, `zustand@^5.0.6`?**
  _High betweenness centrality (0.093) - this node is a cross-community bridge._
- **Should `utils.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.06258890469416785 - nodes in this community are weakly interconnected._
- **Should `sidebar.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.07965860597439545 - nodes in this community are weakly interconnected._